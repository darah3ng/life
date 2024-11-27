import { useState } from 'react';
import { Timer } from 'lucide-react';
import { LifeGrid } from './components/LifeGrid';
import { AgeInput } from './components/AgeInput';
import { ZoomToggle } from './components/ZoomToggle';
import { formatAge } from './utils/lifeCalculations';
import type { LifeConfig } from './types';

function App() {
  const [config, setConfig] = useState<LifeConfig>({
    currentAge: 0,
    maxAge: 90,
    weeksPerYear: 52,
    isZoomedOut: false,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-[1200px] space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Timer className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">LIFE</h1>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Each dot represents a week of your life. The visualization helps you understand the finite nature of time and the importance of making each moment count.
          </p>
        </div>

        <div className="flex justify-center">
          <AgeInput
            currentAge={config.currentAge}
            onChange={(age) => setConfig((prev) => ({ ...prev, currentAge: age }))}
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-100 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-500">Week Grid</span>
                <ZoomToggle
                  isZoomedOut={config.isZoomedOut}
                  onToggle={() => setConfig(prev => ({ ...prev, isZoomedOut: !prev.isZoomedOut }))}
                />
              </div>
              <span className="text-sm text-gray-400">
                {formatAge(config.currentAge)} of {config.maxAge} years
              </span>
            </div>
          </div>
          
          <LifeGrid 
            key={`${config.currentAge}-${config.isZoomedOut}`}
            config={config}
          />
        </div>

        <div className="text-center text-sm text-gray-500">
          Total weeks in {config.maxAge} years: {config.maxAge * config.weeksPerYear}
        </div>
      </div>
    </div>
  );
}

export default App;