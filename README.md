# smolstar Hugo Theme  

🌱 A smolweb-compliant theme for Hugo (2.8KB CSS, no JS)  

![Minimalist Interface](screenshot.png) *Add actual screenshot file to repo*

## Principles  
✅ Strictly follows [smolweb.org](https://smolweb.org) guidelines:  
- **Zero JavaScript** (no analytics, no cookies)  
- **2.8KB vanilla CSS** (system fonts only)  
- **Under 10KB/page** (including markup)  
- Semantic HTML5  
- Accessible defaults  
- No build pipeline  

## Installation  
1. Add submodule:  
```bash
git submodule add https://github.com/yourusername/smolstar themes/smolstar
```
2. Set theme in config:  
```yaml
# config.yaml
theme: smolstar
themesDir: ../.. # Match your directory structure
```

## Configuration  
Essential params from your exampleSite/config.yaml:  
```yaml
params:
  author: "Your Name"           # Displayed in footer
  bio: "Simple human"           # Short byline
  description: "My smol space"  # Meta description
  showToc: true                 # Table of Contents
  math: false                   # Enable KaTeX
  links:                        # Menu items
    - name: Posts
      path: /posts
```

## Features  
### Core Components  
- RSS feed (`enableRSS: true`)  
- System preference dark/light mode  
- Accessible semantic markup  
- Responsive typography  
- Basic taxonomy templates  

### Size Optimizations  
- No external requests  
- No web fonts  
- No CSS frameworks  
- No unused CSS rules  

## Important Notes  
⚠️ **Non-Expert Disclaimer**  
This theme is:  
- Used in production by its author  
- Not professionally maintained  
- Missing common features by design  
- Optimized for personal blogging  

Test in multiple browsers before deployment.

## Development  
```bash
# Edit core styles:  
static/css/main.css  # 2.8KB base styles  
# Modify templates:  
layouts/_default/*.html  
```  

No npm/webpack required. PRs welcome for:
- Accessibility improvements
- Translation support
- HTML validation fixes

## License  
Open-source under [MIT License](LICENSE). You may:
- Use commercially
- Modify privately
- Redistribute freely
- Remove attribution

*Keep the web smol* 🌍
