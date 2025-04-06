'use client';

import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope, FaCopy } from 'react-icons/fa';
import Script from 'next/script';

// Create a separate client component for the share buttons
const ShareButtons = () => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "BMI Calculator - Check your Body Mass Index";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${title}&body=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-black">Share</span>
      <button onClick={() => handleShare('facebook')} className="w-8 h-8 flex items-center justify-center bg-[#1877f2] text-white rounded-full hover:opacity-90">
        <FaFacebookF size={16} />
      </button>
      <button onClick={() => handleShare('twitter')} className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] text-white rounded-full hover:opacity-90">
        <FaTwitter size={16} />
      </button>
      <button onClick={() => handleShare('email')} className="w-8 h-8 flex items-center justify-center bg-[#333] text-white rounded-full hover:opacity-90">
        <FaEnvelope size={16} />
      </button>
      <button onClick={() => handleShare('copy')} className="w-8 h-8 flex items-center justify-center bg-[#eee] text-black rounded-full hover:bg-gray-200">
        <FaCopy size={16} />
      </button>
    </div>
  );
};

// Create a separate component for the BMI scale
const BMIScale = ({ bmi }: { bmi: number | null }) => {
  return (
    <div className="mt-6 mb-12">
      <h2 className="text-2xl font-bold text-black mb-10 text-center">Your BMI result</h2>
      <div className="relative">
        <div className="w-full h-2 bg-gradient-to-r from-[#0066ff] via-[#00ff00] via-[#ffff00] to-[#ff0000] rounded-full"></div>
        {bmi && (
          <div 
            className="absolute -top-8 transform -translate-x-1/2 bg-[#ffb700] text-black px-3 py-1 rounded-lg font-bold text-lg"
            style={{ left: `${Math.min(Math.max((bmi - 15) * 3, 0), 100)}%` }}
          >
            {bmi}
          </div>
        )}
      </div>
    </div>
  );
};

// Create a separate component for BMI categories
const BMICategories = () => {
  return (
    <div className="flex justify-between text-base mb-8">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-[#0066ff] mr-2"></div>
        <span className="text-black">Underweight</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-[#00ff00] mr-2"></div>
        <span className="text-black">Healthy</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-[#ffb700] mr-2"></div>
        <span className="text-black">Overweight</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-[#ff0000] mr-2"></div>
        <span className="text-black">Obese</span>
      </div>
    </div>
  );
};

// Create a separate component for the disclaimer section
const DisclaimerSection = () => {
  return (
    <div className="mt-8 bg-white rounded-lg p-6">
      <h2 className="text-xl font-bold text-black mb-4">You should know</h2>
      <div className="space-y-4 text-black">
        <p>
          Body mass index (BMI) is an internationally recognised standard used to classify 
          the body weight of most adults.
        </p>
        <p>
          BMI is not a completely accurate measure of body fat content as it does not take 
          into account factors including muscle mass, bone density, overall body composition, 
          and racial and gender differences.
        </p>
        <p>It is not an appropriate measurement for various groups including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>children 18 years and under</li>
          <li>pregnant people</li>
          <li>people 65 years and older</li>
          <li>very muscular people</li>
          <li>various ethnic communities including people of Asian, Aboriginal or Torres Strait Islander descent</li>
          <li>people with a physical disability</li>
        </ul>
        <p>
          Relying only on BMI may miss other important measurements of health, such as 
          cholesterol, blood sugar, heart rate, blood pressure and inflammation levels, 
          and overestimate or underestimate a person's true health.
        </p>
        <p className="text-[#666] text-sm mt-6">
          This calculator is based on reputable sources of medical research. It is not a 
          diagnostic tool and should not be relied on as a substitute for professional 
          medical or other professional health advice.
        </p>
      </div>
    </div>
  );
};

// Create a separate component for the BMI results
const BMIResults = ({ bmi, category, height, isImperial }: { bmi: number | null; category: string; height: string; isImperial: boolean }) => {
  if (bmi === null) return null;

  const heightInM = isImperial 
    ? parseFloat(height) * 0.0254  // Convert inches to meters
    : parseFloat(height) / 100;    // Convert cm to meters

  const healthyWeightLowerKg = 18.5 * heightInM * heightInM;
  const healthyWeightUpperKg = 24.9 * heightInM * heightInM;

  // Convert to pounds if using Imperial
  const healthyWeightLower = isImperial 
    ? (healthyWeightLowerKg * 2.20462).toFixed(1)  // Convert to pounds
    : healthyWeightLowerKg.toFixed(2);             // Keep as kg
  const healthyWeightUpper = isImperial 
    ? (healthyWeightUpperKg * 2.20462).toFixed(1)  // Convert to pounds
    : healthyWeightUpperKg.toFixed(2);             // Keep as kg

  return (
    <>
      <div className="mt-8 bg-white rounded-lg p-6">
        <BMIScale bmi={bmi} />
        <BMICategories />
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-4">{category} ({bmi})</h3>
          <p className="text-black">
            {category === 'Overweight' && 
              'Your weight appears to be a little above the ideal range. You might like to talk with your doctor about whether you need a new healthy weight target.'}
            {category === 'Healthy' && 
              'Your BMI is within the healthy weight range. Maintain a balanced diet and regular exercise routine.'}
            {category === 'Underweight' && 
              'Your BMI suggests you might be underweight. Consider consulting with a healthcare provider.'}
            {category === 'Obese' && 
              'Your BMI indicates obesity. It\'s recommended to consult with a healthcare provider about a healthy weight management plan.'}
          </p>
        </div>

        <div className="border-t pt-6">
          <h4 className="text-xl font-bold text-black mb-6 text-center">Suggested healthy weight range</h4>
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-black">{healthyWeightLower}</span>
            <span className="text-black">{isImperial ? 'lb' : 'kg'}</span>
            <span className="text-black">⟷</span>
            <span className="text-3xl font-bold text-black">{healthyWeightUpper}</span>
            <span className="text-black">{isImperial ? 'lb' : 'kg'}</span>
          </div>
          <p className="text-center text-sm text-[#666]">
            *According to the National Health and Medical Research Council,<br />
            for most adults a healthy BMI is between 18.5 to 24.9 kg/m2.
          </p>
        </div>
      </div>
      <DisclaimerSection />
    </>
  );
};

export default function Home() {
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [isImperial, setIsImperial] = useState<boolean>(false);
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isImperial) {
      if (heightFt && heightIn) {
        const totalInches = (parseFloat(heightFt) * 12) + parseFloat(heightIn);
        setHeight(totalInches.toString());
      } else {
        setHeight('');
      }
    }
  }, [heightFt, heightIn, isImperial]);

  const handleUnitChange = (imperial: boolean) => {
    setIsImperial(imperial);
    setHeight('');
    setHeightFt('');
    setHeightIn('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };

  useEffect(() => {
    if (!height || !weight) {
      setBmi(null);
      setCategory('');
      return;
    }

    const heightInMeters = isImperial 
      ? parseFloat(height) * 0.0254  // Convert inches to meters
      : parseFloat(height) / 100;    // Convert cm to meters
    const weightInKg = isImperial 
      ? parseFloat(weight) * 0.453592  // Convert pounds to kg
      : parseFloat(weight);

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 25) {
      setCategory('Healthy');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  }, [height, weight, isImperial]);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">BMI calculator</h1>
        <ShareButtons />
        <p className="text-black mb-8">
          Calculating your body mass index (BMI) is a quick and effective way to identify weight issues
          that can lead to the development of chronic conditions.
        </p>

        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-6">Unit Of Measurement</h2>
          <div className="inline-flex rounded-md mb-8">
            <button
              onClick={() => handleUnitChange(false)}
              className={`px-6 py-2 text-base font-medium ${
                !isImperial
                  ? 'bg-[#0066ff] text-white'
                  : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              Metric
            </button>
            <button
              onClick={() => handleUnitChange(true)}
              className={`px-6 py-2 text-base font-medium ${
                isImperial
                  ? 'bg-[#0066ff] text-white'
                  : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              Imperial
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-black mb-2">
                Height {isImperial ? '' : '(cm)'}
              </label>
              {isImperial ? (
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black text-lg"
                      placeholder="Feet"
                      min="0"
                      disabled={!mounted}
                    />
                    <span className="absolute right-3 top-3 text-[#666]">ft</span>
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black text-lg"
                      placeholder="Inches"
                      min="0"
                      max="11"
                      disabled={!mounted}
                    />
                    <span className="absolute right-3 top-3 text-[#666]">in</span>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black text-lg"
                    placeholder="Enter height"
                    disabled={!mounted}
                  />
                  <span className="absolute right-3 top-3 text-[#666]">cm</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-base font-medium text-black mb-2">
                Weight ({isImperial ? 'lb' : 'kg'})
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black text-lg"
                  placeholder="Enter weight"
                  disabled={!mounted}
                />
                <span className="absolute right-3 top-3 text-[#666]">
                  {isImperial ? 'lb' : 'kg'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {bmi && <BMIResults bmi={bmi} category={category} height={height} isImperial={isImperial} />}
      </div>
    </main>
  );
}
