# BMI Calculator

A modern, responsive BMI (Body Mass Index) calculator built with Next.js 14 and Tailwind CSS. This web application provides an easy way to calculate and interpret BMI values, with support for both metric and imperial units.

## Features

- 🔄 Real-time BMI calculation
- 📏 Support for both Metric (kg/cm) and Imperial (lb/ft/in) units
- 📊 Visual BMI scale with category indicators
- 💪 Suggested healthy weight range based on height
- 📱 Fully responsive design
- 🔗 Social sharing capabilities
- 🎯 SEO optimized
- 📝 Comprehensive health information and disclaimers
- 🌐 Google Analytics integration
- 💰 Google AdSense ready

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bmi.git
```

2. Install dependencies:
```bash
cd bmi
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory and add your Google Analytics and AdSense IDs:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_ADSENSE_ID=your_adsense_id
```

## Deployment

This project is optimized for deployment on Netlify. Follow these steps:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Add your environment variables in Netlify's dashboard

## Features in Detail

### BMI Calculation
- Supports both metric (kilograms/centimeters) and imperial (pounds/feet/inches) units
- Real-time calculation with immediate visual feedback
- Clear category indication (Underweight, Healthy, Overweight, Obese)

### User Interface
- Clean, modern design
- Interactive BMI scale with color-coded categories
- Easy unit switching between metric and imperial
- Responsive layout that works on all devices
- Accessible form controls with clear labels

### Health Information
- Detailed BMI category descriptions
- Suggested healthy weight range based on height
- Comprehensive disclaimer section
- Professional health advice recommendations

### Sharing Features
- Direct sharing to Facebook and Twitter
- Email sharing capability
- URL copy functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
