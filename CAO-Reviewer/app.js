document.addEventListener('DOMContentLoaded', () => {
    const tabsNav = document.getElementById('tabsNav');
    const contentContainer = document.getElementById('contentContainer');
    const currentTopicTitle = document.getElementById('currentTopicTitle');
    const searchInput = document.getElementById('searchInput');

    let currentTopicId = null;

    // Initialize
    renderTabs();
    if (courseData.length > 0) {
        selectTopic(courseData[0].id);
    }

    // Render Tabs
    function renderTabs() {
        tabsNav.innerHTML = '';
        courseData.forEach(topic => {
            const el = document.createElement('div');
            el.className = 'nav-item';
            el.textContent = topic.title;
            el.dataset.id = topic.id;
            el.onclick = () => selectTopic(topic.id);
            tabsNav.appendChild(el);
        });
    }

    // Select Topic
    function selectTopic(id) {
        currentTopicId = id;

        // Update styling
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === id);
        });

        // Update Title
        const topic = courseData.find(t => t.id === id);
        currentTopicTitle.textContent = topic ? topic.title : 'Details';

        renderContent(topic);
    }

    // Render Content
    function renderContent(topic) {
        contentContainer.innerHTML = '';
        if (!topic) return;

        topic.sections.forEach((section, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'topic-section';
            sectionEl.style.animationDelay = `${index * 0.1}s`;

            const titleEl = document.createElement('h3');
            titleEl.className = 'section-title';
            titleEl.textContent = section.title;
            sectionEl.appendChild(titleEl);

            const gridEl = document.createElement('div');
            gridEl.className = 'card-grid';

            section.cards.forEach(card => {
                const cardEl = createCard(card);
                gridEl.appendChild(cardEl);
            });

            sectionEl.appendChild(gridEl);
            contentContainer.appendChild(sectionEl);
        });
    }

    function createCard(cardData) {
        const card = document.createElement('div');
        card.className = 'info-card';

        // Wrapper for main content
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'card-content-wrapper';

        const header = document.createElement('div');
        header.className = 'card-header';
        header.textContent = cardData.title;
        contentWrapper.appendChild(header);

        const body = document.createElement('div');
        body.className = 'card-body';
        const ul = document.createElement('ul');

        cardData.content.forEach(item => {
            const li = document.createElement('li');

            if (typeof item === 'string') {
                li.innerHTML = item;
            } else if (typeof item === 'object') {
                // If we need to support specific object types in future we can add here
                if (item.type === 'example') {
                    li.innerHTML = `<span class="example-tag">EXAMPLE</span> ${item.text}`;
                }
            }
            ul.appendChild(li);
        });

        body.appendChild(ul);
        contentWrapper.appendChild(body);
        card.appendChild(contentWrapper);

        // Check for Strategy Data in global strategyData object (from example.js)
        if (typeof strategyData !== 'undefined' && currentTopicId && strategyData[currentTopicId]) {
            const topicStrategies = strategyData[currentTopicId];
            // Normalize titles for lookup if needed, but direct match should work if data is consistent
            const strategy = topicStrategies[cardData.title];

            if (strategy) {
                const overlay = document.createElement('div');
                overlay.className = 'strategy-overlay';

                const typeLabel = document.createElement('div');
                typeLabel.className = 'strategy-type';
                typeLabel.textContent = strategy.type;
                overlay.appendChild(typeLabel);

                const textDiv = document.createElement('div');
                textDiv.className = 'strategy-text';
                textDiv.textContent = `"${strategy.text}"`;
                overlay.appendChild(textDiv);

                card.appendChild(overlay);
            }
        }

        return card;
    }

    // Search Functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        const cards = document.querySelectorAll('.info-card');
        let hasMatches = false;

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            if (text.includes(query)) {
                card.style.display = 'block';
                hasMatches = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Hide empty sections
        document.querySelectorAll('.topic-section').forEach(section => {
            const visibleCards = section.querySelectorAll('.info-card[style="display: block"]');

            // Check if user has cleared search or if there are matches
            // Note: inline style 'display: block' is set by the loop above.
            // If empty string (default), it's visible. So we need to be careful.

            // Actually, simpler way: check if all children are hidden
            let sectionHasVisible = false;
            section.querySelectorAll('.info-card').forEach(c => {
                if (c.style.display !== 'none') sectionHasVisible = true;
            });

            section.style.display = sectionHasVisible ? 'block' : 'none';
        });
    });
});
