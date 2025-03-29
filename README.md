# 🌍 World Clock Zone  

Welcome to **World Clock Zone**, a web application that provides real-time world clock information using modern web technologies.  

## 🚀 Project Overview  

World Clock Zone allows users to view and compare time zones from different locations worldwide. The app fetches real-time data from APIs and displays it in an interactive UI.  

🔗 **Live URL**: [World Clock Zone](https://world-clockzone.vercel.app/)  

---

## 🛠️ Tech Stack  

This project is built with the following technologies:  

- **Vite** – A fast build tool for modern web apps.  
- **React** – JavaScript library for building interactive UIs.  
- **TypeScript** – Type-safe JavaScript for better development experience.  
- **shadcn-ui** – Customizable UI components.  
- **Tailwind CSS** – Utility-first CSS framework for styling.  

---

## 📡 Data Source & APIs  

World Clock Zone fetches real-time time zone data using public APIs:  

- **World Time API** ([http://worldtimeapi.org/](http://worldtimeapi.org/))  
  - Provides accurate time zone data based on region/city.  
  - Used for fetching the current time, UTC offset, and daylight saving time (DST) info.  

- **IP Geolocation API** (optional)  
  - If enabled, detects the user’s location and displays their local time zone automatically.  

---

## 🎨 Features  

✅ **View Time Zones** – Check the current time for different locations worldwide.  
✅ **Real-Time Updates** – Automatically updates the displayed time every second.  
✅ **Search & Filter** – Easily find and select different time zones.  
✅ **Daylight Saving Time (DST) Support** – Shows if a location follows DST.  
✅ **Responsive Design** – Works seamlessly on desktops, tablets, and mobile devices.  

---

## 🖥️ Local Development  

If you want to run the project locally, follow these steps:  

### Prerequisites  

Ensure you have **Node.js** and **npm** installed. You can install Node.js using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).  

### Steps  

```sh
# 1️⃣ Clone the repository  
git clone <YOUR_GIT_URL>  

# 2️⃣ Navigate to the project directory  
cd <YOUR_PROJECT_NAME>  

# 3️⃣ Install dependencies  
npm install  

# 4️⃣ Start the development server  
npm run dev  
```  

The app will be available at **http://localhost:5173** (default Vite port).  

---

## 🌍 Deployment  

### **Using Lovable**  

- Visit [World Clock Zone](https://world-clockzone.vercel.app/).  
- Click on **Share → Publish** to deploy.  

### **Manual Deployment**  

If you prefer using a custom domain or external hosting, you can deploy the project using **Vercel**, **Netlify**, or **GitHub Pages**.  

---

## ✍️ How to Contribute  

We welcome contributions! If you'd like to improve this project, follow these steps:  

1. **Fork the repository** on GitHub.  
2. **Create a new branch** for your feature or bugfix.  
3. **Make your changes** in your preferred IDE.  
4. **Commit and push** your changes.  
5. **Submit a pull request (PR)** for review.  

---

## ❓ FAQ  

### Can I use a custom domain?  
Currently, **Lovable does not support custom domains**. If you need a custom domain, we recommend deploying on **Netlify** or **Vercel**.  

### How often is the time updated?  
The clock updates every **second** to display accurate real-time information.  

### Do I need an API key?  
- **World Time API** does not require an API key.  
- If **IP Geolocation API** is enabled, you might need an API key from a provider like **ipinfo.io** or **ipgeolocation.io**.  

---

## 📜 License  

This project is **open-source** under the [MIT License](LICENSE). Feel free to modify and use it in your own projects!  

---

🚀 **Start exploring different time zones now!**  
👉 [Visit World Clock Zone](https://world-clockzone.vercel.app/) 🌍⏰  