(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('#navLinks a');
  const sectionIds = ['home', 'about', 'journey', 'skills', 'projects', 'education', 'writing', 'simulator', 'contact'];

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 130;
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) {
        return;
      }

      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`#navLinks a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });

  const proofSection = document.getElementById('proof');
  const proofNumbers = document.querySelectorAll('.proof-number');
  let countersStarted = false;

  const runCounters = () => {
    if (countersStarted) {
      return;
    }
    countersStarted = true;

    proofNumbers.forEach((counter) => {
      const target = Number(counter.dataset.target || 0);
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 45));
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = `${current}${target >= 10 ? '+' : ''}`;
      }, 26);
    });
  };

  const proofObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  if (proofSection) {
    proofObserver.observe(proofSection);
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projectList .project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const { filter } = button.dataset;

      projectCards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('hidden');
          return;
        }

        const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
        if (tags.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((event.clientY - centerY) / rect.height) * -4;
      const rotateY = ((event.clientX - centerX) / rect.width) * 4;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });

  const substackStatus = document.getElementById('substackStatus');
  const substackPosts = document.getElementById('substackPosts');

  const featuredPosts = [
    {
      title: 'Girl, Read This — Edition #005',
      description: 'A personal + practical edition focused on clarity, momentum, and career direction in tech.',
      canonical_url: 'https://lipgloss2llms.substack.com/p/girl-read-this-edition-005?r=6tsia2',
      post_date: '2026-05-01T00:00:00.000Z'
    },
    {
      title: 'AI Concepts Explained: Hallucinations',
      description: 'A plain-English breakdown of AI hallucinations, why they happen, and how to design around them.',
      canonical_url: 'https://lipgloss2llms.substack.com/p/ai-concepts-explained-hallucinations-e11?r=6tsia2',
      post_date: '2026-05-02T00:00:00.000Z'
    },
    {
      title: 'AI Concepts Explained: Constitutional AI',
      description: 'An accessible guide to constitutional AI and how safety-aligned behavior is shaped in LLM systems.',
      canonical_url: 'https://lipgloss2llms.substack.com/p/ai-concepts-explained-constitutional?r=6tsia2',
      post_date: '2026-05-03T00:00:00.000Z'
    }
  ];

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return 'Recent post';
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function buildPostCard(post) {
    const card = document.createElement('article');
    card.className = 'writing-card tilt-card';

    const title = document.createElement('h3');
    title.textContent = post.title || 'Untitled post';

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = formatDate(post.post_date);

    const description = document.createElement('p');
    const sourceText = post.description || post.subtitle || post.truncated_body_text || 'Read the full article on Substack.';
    description.textContent = sourceText.slice(0, 160);

    const link = document.createElement('a');
    link.href = post.canonical_url || `https://lipgloss2llms.substack.com/p/${post.slug}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'btn btn-secondary';
    link.textContent = 'Read on Substack';

    card.append(title, meta, description, link);
    return card;
  }

  function renderPosts(posts) {
    if (!substackPosts) {
      return;
    }

    substackPosts.innerHTML = '';
    posts.slice(0, 3).forEach((post) => {
      substackPosts.appendChild(buildPostCard(post));
    });
  }

  function loadSubstackPosts() {
    if (!substackPosts || !substackStatus) {
      return;
    }

    renderPosts(featuredPosts);
    substackStatus.textContent = 'Featured posts from Lipgloss & LLMS.';
  }

  loadSubstackPosts();
})();

function sendEmail(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const mailto = `mailto:t_amugo@fanshaweonline.ca?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
  window.location.href = mailto;
}
