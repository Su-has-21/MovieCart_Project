# Movie Cart - E-commerce Project

A modern e-commerce platform built with React and Vite, featuring a movie shopping experience with a beautiful user interface and responsive design.

## 🚀 Features

- Modern and responsive UI design
- Movie browsing and shopping experience
- Rating system for products
- Pagination for better navigation
- Shopping cart functionality
- Context-based state management
- React Router for seamless navigation

## 🛠️ Technologies Used

- React 19
- Vite 6
- React Router DOM 7
- Axios for API calls
- JSON Server for mock backend
- ESLint for code quality
- CSS3 with modern styling features

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd movie-cart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Start the JSON server (in a separate terminal):
```bash
npx json-server --watch Data/db.json --port 3000
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
movie-cart/
├── src/
│   ├── Components/     # Reusable UI components
│   ├── Pages/         # Page components
│   ├── context/       # React context providers
│   ├── assets/        # Static assets
│   ├── styles/        # Global styles
│   └── App.jsx        # Main application component
├── Data/              # Mock data and JSON server
├── public/            # Public assets
└── package.json       # Project dependencies
```

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Styling

The project uses modern CSS features including:
- CSS Grid and Flexbox for layouts
- Responsive design principles
- Modern color schemes and transitions
- Mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the build tool
- All contributors and maintainers
