import streamlit as st
import base64
from datetime import datetime

# Page configuration
st.set_page_config(
    page_title="Tatyana Amugo - AI/ML Developer",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for styling
st.markdown("""
<style>
    /* Import Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    /* Global Styles */
    .main {
        font-family: 'Inter', sans-serif;
    }
    
    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    
    /* Custom header */
    .custom-header {
        background: linear-gradient(135deg, #ffffff 0%, #ffebee 100%);
        padding: 1rem 0;
        margin: -1rem -1rem 2rem -1rem;
        border-bottom: 1px solid #ffe0dd;
    }
    
    .logo-container {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 1rem;
    }
    
    .logo-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #ffab91, #ff8a65);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
    }
    
    .logo-text {
        font-size: 1.5rem;
        font-weight: 600;
        color: #333;
    }
    
    /* Hero Section */
    .hero-container {
        text-align: center;
        padding: 3rem 0;
        background: linear-gradient(135deg, #ffffff 0%, #fff3f0 100%);
        border-radius: 15px;
        margin-bottom: 2rem;
    }
    
    .hero-title {
        font-size: 3rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 0.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.3rem;
        color: #ff8a65;
        margin-bottom: 1.5rem;
        font-weight: 500;
    }
    
    .hero-description {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #555;
        max-width: 800px;
        margin: 0 auto;
    }
    
    /* Quirky Fact Box */
    .quirky-fact {
        background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
        border-left: 4px solid #ff8a65;
        padding: 1.5rem;
        margin: 2rem 0;
        border-radius: 0 10px 10px 0;
        font-style: italic;
    }
    
    /* Cards */
    .info-card {
        background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(255, 138, 101, 0.1);
        margin-bottom: 1.5rem;
        border: 1px solid #ffe0dd;
    }
    
    .card-title {
        color: #ff8a65;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    /* Timeline */
    .timeline-item {
        background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 1.5rem;
        border-left: 4px solid #ff8a65;
        box-shadow: 0 2px 10px rgba(255, 138, 101, 0.1);
    }
    
    .timeline-date {
        background: #ff8a65;
        color: white;
        padding: 0.3rem 1rem;
        border-radius: 15px;
        font-size: 0.9rem;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 1rem;
    }
    
    .timeline-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
    }
    
    .timeline-company {
        color: #ff8a65;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    
    /* Skills */
    .skill-category {
        background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
        padding: 1.5rem;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 1rem;
        box-shadow: 0 2px 10px rgba(255, 138, 101, 0.1);
    }
    
    .skill-category h3 {
        color: #ff8a65;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    
    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }
    
    .skill-tag {
        background: #ffebe9;
        color: #333;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        border: 1px solid #ffe0dd;
    }
    
    /* Project Cards */
    .project-card {
        background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        box-shadow: 0 4px 15px rgba(255, 138, 101, 0.1);
        border: 1px solid #ffe0dd;
    }
    
    .project-title {
        color: #ff8a65;
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    /* Contact Info */
    .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        padding: 0.5rem;
    }
    
    .contact-icon {
        width: 30px;
        height: 30px;
        background: #ff8a65;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        font-size: 0.9rem;
    }
    
    /* Buttons */
    .custom-button {
        background: linear-gradient(135deg, #ff8a65, #ffab91);
        color: white;
        padding: 0.7rem 2rem;
        border: none;
        border-radius: 25px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        margin: 0.5rem;
        transition: all 0.3s ease;
    }
    
    .custom-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 138, 101, 0.4);
        color: white;
        text-decoration: none;
    }
    
    .secondary-button {
        background: transparent;
        color: #ff8a65;
        border: 2px solid #ff8a65;
        padding: 0.7rem 2rem;
        border-radius: 25px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        margin: 0.5rem;
        transition: all 0.3s ease;
    }
    
    .secondary-button:hover {
        background: #ff8a65;
        color: white;
        text-decoration: none;
    }
    
    /* Social Links */
    .social-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 1rem 1.5rem;
        background: linear-gradient(135deg, #fff5f5 0%, #ffebee 100%);
        border-radius: 25px;
        text-decoration: none;
        color: #333;
        margin: 0.5rem;
        transition: all 0.3s ease;
        border: 1px solid #ffe0dd;
    }
    
    .social-link:hover {
        background: #ff8a65;
        color: white;
        transform: translateY(-2px);
        text-decoration: none;
    }
    
    .social-icon {
        font-size: 1.2rem;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2rem;
        }
        
        .hero-subtitle {
            font-size: 1.1rem;
        }
        
        .skill-tags {
            justify-content: flex-start;
        }
    }
</style>
""", unsafe_allow_html=True)

def render_header():
    """Render the custom header"""
    st.markdown("""
    <div class="custom-header">
        <div class="logo-container">
            <div class="logo-icon">TCA</div>
            <div class="logo-text">Tatyana Amugo</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

def render_home():
    """Render the home page"""
    render_header()
    
    st.markdown("""
    <div class="hero-container">
        <h1 class="hero-title">Hi, I'm Tatyana! 👋</h1>
        <p class="hero-subtitle">AI/ML Developer & Data Enthusiast</p>
        <div class="hero-description">
            <p>I'm passionate about solving complex problems with simple, elegant solutions. Currently pursuing my Graduate Certificate in AI & Machine Learning at Fanshawe College, I love turning data into actionable insights and building intelligent systems that make a real difference.</p>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("""
    <div class="quirky-fact">
        <strong>Fun fact:</strong> I believe in solving problems the easiest way possible while still being efficient and effective. Why make it complicated when simple works better? ✨
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("""
    <div class="hero-description">
        <p>From predicting customer churn to detecting video anomalies, I enjoy the challenge of making machines understand patterns that help businesses thrive. When I'm not coding, you'll find me exploring the latest in AI research or mentoring fellow students.</p>
    </div>
    """, unsafe_allow_html=True)
    
    # Action buttons
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        st.markdown("""
        <div style="text-align: center; margin: 2rem 0;">
            <a href="?page=Projects" class="custom-button">View My Work</a>
            <a href="?page=Contact" class="secondary-button">Get In Touch</a>
        </div>
        """, unsafe_allow_html=True)

def render_profile():
    """Render the profile page"""
    render_header()
    
    st.title("About Me")
    
    # Contact Info and Current Focus
    col1, col2 = st.columns([1, 2])
    
    with col1:
        st.markdown("""
        <div class="info-card">
            <h3 class="card-title">Contact Info</h3>
            <div class="contact-item">
                <div class="contact-icon">📍</div>
                <span>London, ON, Canada</span>
            </div>
            <div class="contact-item">
                <div class="contact-icon">📞</div>
                <span>519-280-0207</span>
            </div>
            <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <span>t_amugo@fanshaweonline.ca</span>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🎓</div>
                <span>GPA: 4.1</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="info-card">
            <h3 class="card-title">Current Focus</h3>
            <p>I'm currently diving deep into advanced machine learning techniques, working on real-world projects that combine my passion for data science with practical business applications. My recent work includes customer churn prediction models and video anomaly detection systems using cutting-edge deep learning approaches.</p>
            <br>
            <p><strong>What drives me:</strong> The intersection of technology and human impact. I love building solutions that not only work technically but also create meaningful value for users and businesses.</p>
        </div>
        """, unsafe_allow_html=True)
    
    # Timeline
    st.markdown("<h2 style='text-align: center; color: #ff8a65; margin: 3rem 0 2rem;'>My Journey</h2>", unsafe_allow_html=True)
    
    timeline_items = [
        {
            "date": "Jan 2025 - Present",
            "title": "Graduate Certificate - AI & Machine Learning",
            "company": "Fanshawe College",
            "description": "Developing advanced ML models including customer churn prediction using logistic regression, decision trees, and random forests. Working with NLP and deep learning frameworks like TensorFlow and PyTorch."
        },
        {
            "date": "Sep 2024 - Dec 2024",
            "title": "ERP Developer",
            "company": "Upande - Nairobi, Kenya",
            "description": "Led ERPNext implementations and data migration initiatives. Contributed to IoT integrations that improved workflow automation by 30%."
        },
        {
            "date": "Sep 2024 - Oct 2024",
            "title": "Consumer Insights & Data Analytics Extern",
            "company": "Beats by Dre - Nairobi, Kenya",
            "description": "Conducted deep data analysis on customer behavior, driving 15% improvement in marketing strategies through dynamic dashboards and visualizations."
        },
        {
            "date": "Apr 2020 - Jul 2023",
            "title": "Bachelor's Degree - Informatics & Computer Science",
            "company": "Strathmore University - Nairobi, Kenya",
            "description": "Built 3D CNN with spatio-temporal autoencoders for video anomaly detection. Optimized unsupervised learning models for real-time processing."
        }
    ]
    
    for item in timeline_items:
        st.markdown(f"""
        <div class="timeline-item">
            <div class="timeline-date">{item['date']}</div>
            <div class="timeline-title">{item['title']}</div>
            <div class="timeline-company">{item['company']}</div>
            <p>{item['description']}</p>
        </div>
        """, unsafe_allow_html=True)
    
    # Core Competencies
    st.markdown("<h2 style='text-align: center; color: #ff8a65; margin: 3rem 0 2rem;'>Core Competencies</h2>", unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown("""
        <div class="skill-category">
            <h3>Data Analysis & AI/ML</h3>
            <div class="skill-tags">
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Scikit-learn</span>
                <span class="skill-tag">TensorFlow</span>
                <span class="skill-tag">PyTorch</span>
                <span class="skill-tag">Pandas</span>
                <span class="skill-tag">SQL</span>
                <span class="skill-tag">OpenCV</span>
                <span class="skill-tag">Keras</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="skill-category">
            <h3>Full-Stack Development</h3>
            <div class="skill-tags">
                <span class="skill-tag">Django</span>
                <span class="skill-tag">REST APIs</span>
                <span class="skill-tag">ERPNext</span>
                <span class="skill-tag">Frappe</span>
                <span class="skill-tag">IoT Integration</span>
                <span class="skill-tag">Automation</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
        <div class="skill-category">
            <h3>Data Visualization</h3>
            <div class="skill-tags">
                <span class="skill-tag">Tableau</span>
                <span class="skill-tag">Matplotlib</span>
                <span class="skill-tag">Dashboard Design</span>
                <span class="skill-tag">KPI Analysis</span>
                <span class="skill-tag">Streamlit</span>
            </div>
        </div>
        """, unsafe_allow_html=True)

def render_projects():
    """Render the projects page"""
    render_header()
    
    st.title("Featured Projects")
    
    # Project 1: Customer Churn Prediction
    st.markdown("""
    <div class="project-card">
        <h3 class="project-title">🎯 Customer Churn Prediction Model</h3>
        <p>Built and deployed predictive models using logistic regression, decision trees, and random forests to identify customers at risk of churning. Implemented comprehensive data preprocessing and feature engineering pipeline using Python and scikit-learn.</p>
        <div class="skill-tags" style="margin-top: 1rem;">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Scikit-learn</span>
            <span class="skill-tag">Pandas</span>
            <span class="skill-tag">Machine Learning</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    # Project 2: Video Anomaly Detection
    st.markdown("""
    <div class="project-card">
        <h3 class="project-title">🎥 Video Anomaly Detection System</h3>
        <p>Developed a sophisticated 3D CNN with spatio-temporal autoencoders for real-time video anomaly detection. Optimized unsupervised learning models for efficient processing using Python, OpenCV, and Keras.</p>
        <div class="skill-tags" style="margin-top: 1rem;">
            <span class="skill-tag">Deep Learning</span>
            <span class="skill-tag">OpenCV</span>
            <span class="skill-tag">Keras</span>
            <span class="skill-tag">Computer Vision</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    # Add button for anomaly detection project
    col1, col2, col3 = st.columns([1, 1, 1])
    with col2:
        if st.button("🚀 View Anomaly Detection Demo", key="anomaly_demo", help="Click to view the live Streamlit demo"):
            st.info("🔗 Add your Streamlit app URL here! You can replace this with: st.markdown('[🚀 View Live Demo](YOUR_STREAMLIT_URL)', unsafe_allow_html=True)")
    
    # Project 3: Consumer Insights Dashboard
    st.markdown("""
    <div class="project-card">
        <h3 class="project-title">📊 Consumer Insights Dashboard</h3>
        <p>Created dynamic dashboards and visualizations for Beats by Dre to analyze customer behavior and market segmentation. Resulted in 15% improvement in targeted marketing strategies through data-driven insights.</p>
        <div class="skill-tags" style="margin-top: 1rem;">
            <span class="skill-tag">Tableau</span>
            <span class="skill-tag">Data Analysis</span>
            <span class="skill-tag">Market Research</span>
            <span class="skill-tag">Python</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

def render_contact():
    """Render the contact page"""
    render_header()
    
    st.title("Let's Connect!")
    
    # Social Links
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        st.markdown("""
        <div style="text-align: center; margin: 2rem 0;">
            <a href="https://github.com/cheredi" target="_blank" class="social-link">
                <span class="social-icon">🐱</span>
                <span>GitHub</span>
            </a>
            <a href="http://www.linkedin.com/in/tatyana-amugo02" target="_blank" class="social-link">
                <span class="social-icon">💼</span>
                <span>LinkedIn</span>
            </a>
        </div>
        """, unsafe_allow_html=True)
    
    # Contact Form
    st.markdown("<h3 style='text-align: center; color: #ff8a65; margin: 2rem 0;'>Send me a message</h3>", unsafe_allow_html=True)
    
    with st.form("contact_form"):
        col1, col2 = st.columns(2)
        
        with col1:
            name = st.text_input("Your Name", placeholder="Enter your name")
            email = st.text_input("Your Email", placeholder="Enter your email")
        
        with col2:
            subject = st.text_input("Subject", placeholder="Enter subject")
            company = st.text_input("Company (Optional)", placeholder="Your company")
        
        message = st.text_area("Message", placeholder="Enter your message here...", height=150)
        
        submitted = st.form_submit_button("Send Message 📧")
        
        if submitted:
            if name and email and subject and message:
                # Create mailto link
                mailto_body = f"From: {name} ({email})"
                if company:
                    mailto_body += f" at {company}"
                mailto_body += f"\n\n{message}"
                
                mailto_link = f"mailto:t_amugo@fanshaweonline.ca?subject={subject}&body={mailto_body}"
                
                st.success("✅ Message prepared! Click the link below to send via your email client:")
                st.markdown(f"[📧 Send Email](mailto:t_amugo@fanshaweonline.ca?subject={subject}&body={mailto_body.replace(chr(10), '%0A')})")
            else:
                st.error("❌ Please fill in all required fields!")

def main():
    """Main application function"""
    
    # Sidebar navigation
    st.sidebar.markdown("""
    <div style="text-align: center; padding: 1rem 0;">
        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ffab91, #ff8a65); 
                    border-radius: 50%; display: flex; align-items: center; justify-content: center; 
                    color: white; font-weight: bold; font-size: 20px; margin: 0 auto 1rem;">TCA</div>
        <h3 style="color: #ff8a65; margin: 0;">Portfolio</h3>
    </div>
    """, unsafe_allow_html=True)
    
    # Navigation
    page = st.sidebar.selectbox(
        "Navigate to:",
        ["Home", "Profile", "Projects", "Contact"],
        index=0
    )
    
    # Add some spacing
    st.sidebar.markdown("---")
    
    # Quick info in sidebar
    st.sidebar.markdown("""
    **Quick Contact:**
    - 📧 t_amugo@fanshaweonline.ca
    - 📍 London, ON, Canada
    - 🎓 AI/ML Graduate Student
    - 📊 GPA: 4.1
    """)
    
    st.sidebar.markdown("---")
    st.sidebar.markdown("**Connect with me:**")
    st.sidebar.markdown("🐱 [GitHub](https://github.com/cheredi)")
    st.sidebar.markdown("💼 [LinkedIn](http://www.linkedin.com/in/tatyana-amugo02)")
    
    # Render selected page
    if page == "Home":
        render_home()
    elif page == "Profile":
        render_profile()
    elif page == "Projects":
        render_projects()
    elif page == "Contact":
        render_contact()
    
    # Footer
    st.markdown("---")
    st.markdown("""
    <div style="text-align: center; padding: 2rem 0; color: #666;">
        <p>© 2025 Tatyana Amugo. Built with passion for clean, effective solutions. 🚀</p>
        <p style="font-size: 0.9rem;">Made with Streamlit & lots of ☕</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()