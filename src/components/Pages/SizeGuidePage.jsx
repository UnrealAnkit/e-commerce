import React, { useState } from 'react';
import { Ruler, Users, ShirtIcon, Info, ChevronDown, ChevronUp } from 'lucide-react';

const SizeGuidePage = () => {
  const [activeCategory, setActiveCategory] = useState('men');
  const [openTip, setOpenTip] = useState(null);

  const sizeData = {
    men: {
      shirts: {
        name: "Men's Shirts & T-Shirts",
        sizes: [
          { size: 'XS', chest: '34-36', waist: '28-30', shoulder: '16.5', length: '26' },
          { size: 'S', chest: '36-38', waist: '30-32', shoulder: '17', length: '26.5' },
          { size: 'M', chest: '38-40', waist: '32-34', shoulder: '17.5', length: '27' },
          { size: 'L', chest: '40-42', waist: '34-36', shoulder: '18', length: '27.5' },
          { size: 'XL', chest: '42-44', waist: '36-38', shoulder: '18.5', length: '28' },
          { size: '2XL', chest: '44-46', waist: '38-40', shoulder: '19', length: '28.5' },
          { size: '3XL', chest: '46-48', waist: '40-42', shoulder: '19.5', length: '29' }
        ]
      },
      pants: {
        name: "Men's Pants & Jeans",
        sizes: [
          { size: '28', waist: '28', hip: '34', inseam: '30', outseam: '40' },
          { size: '30', waist: '30', hip: '36', inseam: '30', outseam: '40' },
          { size: '32', waist: '32', hip: '38', inseam: '32', outseam: '42' },
          { size: '34', waist: '34', hip: '40', inseam: '32', outseam: '42' },
          { size: '36', waist: '36', hip: '42', inseam: '32', outseam: '42' },
          { size: '38', waist: '38', hip: '44', inseam: '32', outseam: '42' },
          { size: '40', waist: '40', hip: '46', inseam: '32', outseam: '42' }
        ]
      }
    },
    women: {
      tops: {
        name: "Women's Tops & Shirts",
        sizes: [
          { size: 'XS', bust: '30-32', waist: '24-26', hip: '34-36', length: '24' },
          { size: 'S', bust: '32-34', waist: '26-28', hip: '36-38', length: '24.5' },
          { size: 'M', bust: '34-36', waist: '28-30', hip: '38-40', length: '25' },
          { size: 'L', bust: '36-38', waist: '30-32', hip: '40-42', length: '25.5' },
          { size: 'XL', bust: '38-40', waist: '32-34', hip: '42-44', length: '26' },
          { size: '2XL', bust: '40-42', waist: '34-36', hip: '44-46', length: '26.5' },
          { size: '3XL', bust: '42-44', waist: '36-38', hip: '46-48', length: '27' }
        ]
      },
      bottoms: {
        name: "Women's Pants & Skirts",
        sizes: [
          { size: 'XS', waist: '24-26', hip: '34-36', inseam: '28', outseam: '36' },
          { size: 'S', waist: '26-28', hip: '36-38', inseam: '28', outseam: '36' },
          { size: 'M', waist: '28-30', hip: '38-40', inseam: '29', outseam: '37' },
          { size: 'L', waist: '30-32', hip: '40-42', inseam: '29', outseam: '37' },
          { size: 'XL', waist: '32-34', hip: '42-44', inseam: '30', outseam: '38' },
          { size: '2XL', waist: '34-36', hip: '44-46', inseam: '30', outseam: '38' },
          { size: '3XL', waist: '36-38', hip: '46-48', inseam: '30', outseam: '38' }
        ]
      }
    },
    kids: {
      boys: {
        name: "Boys' Clothing (2-16 Years)",
        sizes: [
          { size: '2T', age: '2', chest: '20-21', waist: '19-20', height: '33-36' },
          { size: '3T', age: '3', chest: '21-22', waist: '20-21', height: '36-39' },
          { size: '4T', age: '4', chest: '22-23', waist: '21-22', height: '39-42' },
          { size: '5', age: '5', chest: '23-24', waist: '22-23', height: '42-45' },
          { size: '6', age: '6', chest: '24-25', waist: '23-24', height: '45-48' },
          { size: '7', age: '7', chest: '25-26', waist: '24-25', height: '48-51' },
          { size: '8', age: '8', chest: '26-27', waist: '25-26', height: '51-54' }
        ]
      },
      girls: {
        name: "Girls' Clothing (2-16 Years)",
        sizes: [
          { size: '2T', age: '2', chest: '20-21', waist: '19-20', height: '33-36' },
          { size: '3T', age: '3', chest: '21-22', waist: '20-21', height: '36-39' },
          { size: '4T', age: '4', chest: '22-23', waist: '21-22', height: '39-42' },
          { size: '5', age: '5', chest: '23-24', waist: '22-23', height: '42-45' },
          { size: '6', age: '6', chest: '24-25', waist: '23-24', height: '45-48' },
          { size: '7', age: '7', chest: '25-26', waist: '24-25', height: '48-51' },
          { size: '8', age: '8', chest: '26-27', waist: '25-26', height: '51-54' }
        ]
      }
    }
  };

  const measurementTips = [
    {
      title: "How to Measure Chest/Bust",
      content: "Wrap the measuring tape around the fullest part of your chest/bust, keeping the tape parallel to the floor. Make sure the tape is snug but not tight."
    },
    {
      title: "How to Measure Waist",
      content: "Measure around your natural waistline, which is typically the narrowest part of your torso, about 1-2 inches above your belly button."
    },
    {
      title: "How to Measure Hips",
      content: "Stand with feet together and measure around the fullest part of your hips, typically 7-9 inches below your natural waistline."
    },
    {
      title: "How to Measure Inseam",
      content: "Measure from the crotch seam to the bottom of the leg on a well-fitting pair of pants, or measure from your crotch to where you want the pants to end."
    },
    {
      title: "How to Measure Shoulder Width",
      content: "Measure from the edge of one shoulder to the edge of the other shoulder across your back, keeping the tape parallel to the floor."
    }
  ];

  const fitGuide = [
    {
      fit: "Slim Fit",
      description: "Close to body, minimal ease for a streamlined silhouette",
      recommend: "Choose your exact size for a fitted look"
    },
    {
      fit: "Regular Fit",
      description: "Comfortable fit with moderate ease, not too tight or loose",
      recommend: "Choose your normal size for comfortable wear"
    },
    {
      fit: "Relaxed Fit",
      description: "Loose and comfortable with extra room for movement",
      recommend: "Consider sizing down for a less oversized look"
    },
    {
      fit: "Oversized",
      description: "Intentionally loose and roomy for a trendy, casual look",
      recommend: "Size down 1-2 sizes for intended oversized fit"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Ruler className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Size Guide
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size charts and measuring guide
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-warm p-2 border border-warm-200">
            <div className="flex space-x-2">
              {[
                { key: 'men', label: 'Men', icon: Users },
                { key: 'women', label: 'Women', icon: Users },
                { key: 'kids', label: 'Kids', icon: Users }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'text-trust-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Size Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(sizeData[activeCategory]).map(([categoryKey, category]) => (
            <div key={categoryKey} className="bg-white rounded-2xl shadow-warm border border-warm-200 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-4 border-b border-warm-200">
                <h2 className="text-xl font-bold text-trust-800 flex items-center">
                  <ShirtIcon className="h-5 w-5 mr-2 text-primary-600" />
                  {category.name}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-warm-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-trust-800">Size</th>
                      {Object.keys(category.sizes[0]).filter(key => key !== 'size').map(measurement => (
                        <th key={measurement} className="px-4 py-3 text-left font-semibold text-trust-800 capitalize">
                          {measurement === 'bust' ? 'Bust' : measurement === 'inseam' ? 'Inseam' : measurement === 'outseam' ? 'Outseam' : measurement}
                          <span className="text-trust-500 text-xs block">(inches)</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-100">
                    {category.sizes.map((size, index) => (
                      <tr key={index} className="hover:bg-warm-50 transition-colors duration-200">
                        <td className="px-4 py-3 font-semibold text-primary-600">{size.size}</td>
                        {Object.entries(size).filter(([key]) => key !== 'size').map(([key, value]) => (
                          <td key={key} className="px-4 py-3 text-trust-700">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Measurement Guide */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Ruler className="h-6 w-6 text-primary-600 mr-3" />
            How to Measure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {measurementTips.map((tip, index) => (
              <div key={index} className="border border-warm-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenTip(openTip === index ? null : index)}
                  className="w-full px-4 py-4 text-left bg-primary-50 hover:bg-primary-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="font-semibold text-trust-800">{tip.title}</h3>
                  {openTip === index ? (
                    <ChevronUp className="h-4 w-4 text-primary-600" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-primary-600" />
                  )}
                </button>
                {openTip === index && (
                  <div className="px-4 py-4 bg-white animate-fade-in-up">
                    <p className="text-trust-600 text-sm leading-relaxed">{tip.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fit Guide */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Fit Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {fitGuide.map((guide, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
                <h3 className="font-bold text-trust-800 text-lg mb-2">{guide.fit}</h3>
                <p className="text-trust-600 mb-3">{guide.description}</p>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-primary-700 font-semibold text-sm">
                    💡 {guide.recommend}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size Conversion */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">International Size Conversion</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-warm-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-trust-800">India/UK</th>
                  <th className="px-4 py-3 text-left font-semibold text-trust-800">US</th>
                  <th className="px-4 py-3 text-left font-semibold text-trust-800">EU</th>
                  <th className="px-4 py-3 text-left font-semibold text-trust-800">Chest (inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-100">
                <tr className="hover:bg-warm-50">
                  <td className="px-4 py-3 font-semibold">XS</td>
                  <td className="px-4 py-3">XS</td>
                  <td className="px-4 py-3">44</td>
                  <td className="px-4 py-3">34-36</td>
                </tr>
                <tr className="hover:bg-warm-50">
                  <td className="px-4 py-3 font-semibold">S</td>
                  <td className="px-4 py-3">S</td>
                  <td className="px-4 py-3">46</td>
                  <td className="px-4 py-3">36-38</td>
                </tr>
                <tr className="hover:bg-warm-50">
                  <td className="px-4 py-3 font-semibold">M</td>
                  <td className="px-4 py-3">M</td>
                  <td className="px-4 py-3">48</td>
                  <td className="px-4 py-3">38-40</td>
                </tr>
                <tr className="hover:bg-warm-50">
                  <td className="px-4 py-3 font-semibold">L</td>
                  <td className="px-4 py-3">L</td>
                  <td className="px-4 py-3">50</td>
                  <td className="px-4 py-3">40-42</td>
                </tr>
                <tr className="hover:bg-warm-50">
                  <td className="px-4 py-3 font-semibold">XL</td>
                  <td className="px-4 py-3">XL</td>
                  <td className="px-4 py-3">52</td>
                  <td className="px-4 py-3">42-44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips and Notes */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
            <h3 className="text-xl font-bold text-trust-800 mb-4 flex items-center">
              <Info className="h-5 w-5 text-primary-600 mr-2" />
              Sizing Tips
            </h3>
            <ul className="space-y-3 text-trust-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                When in doubt, size up for a more comfortable fit
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Check the product description for specific fit information
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Read customer reviews for real-world fit feedback
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Different brands may have slight variations in sizing
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Consider the fabric type - stretchy materials offer more flexibility
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
            <h3 className="text-xl font-bold text-trust-800 mb-4">Still Unsure?</h3>
            <p className="text-trust-600 mb-4">
              Our customer service team is here to help you find the perfect fit!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sizing@yourstore.com"
                className="block bg-white text-primary-600 px-4 py-3 rounded-xl font-semibold text-center hover:bg-primary-50 transition-colors duration-300"
              >
                Email Sizing Help
              </a>
              <a
                href="tel:+91-1234567890"
                className="block bg-primary-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-primary-700 transition-colors duration-300"
              >
                Call: +91-1234567890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuidePage;
