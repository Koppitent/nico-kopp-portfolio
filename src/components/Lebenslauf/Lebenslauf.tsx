import { FaCheckCircle, FaBriefcase, FaGraduationCap, FaCode, FaLanguage } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

export function Lebenslauf() {
  return (
    <>
      <section className="min-h-screen px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-400 mb-4">
              <span className="text-indigo-200">{"{ "}</span>
              Lebenslauf
              <span className="text-indigo-200">{" }"}</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-2xl text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">
                  Berufserfahrung
                </h2>
              </div>
              <div className="space-y-5">
                <div className="border-l-4 border-indigo-400 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    ZBB Saar
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Februar 2025 - Heute
                  </p>
                  <p className="text-sm text-gray-300">
                    Digitalisierung von internen Geschäftsprozessen als Webseite | Saarbrücken, Germany
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Aldi SUED
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    2021 - 2023
                  </p>
                  <p className="text-sm text-gray-300">
                    Kassierer, Aushilfe, Werkstudent | Sulzbach Saar, Germany
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-2xl text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">Ausbildung</h2>
              </div>
              <div className="space-y-5">
                <div className="border-l-4 border-indigo-400 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Bachelor Praktische Informatik
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    HTW Saar | 2023 - Heute
                  </p>
                  <p className="text-sm text-gray-300">
                    Praktische Anwendung von Informatik | Saarbrücken, Germany
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Bachelor Informatik
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    UdS | 2021 - 2023
                  </p>
                  <p className="text-sm text-gray-300">
                    Universität des Saarlandes | Saarbrücken, Germany
                  </p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-4 py-2">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Abitur / Allgemeine Hochschulreife
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Theodor-Heuss-Gymnasium | 2013 - 2021
                  </p>
                  <p className="text-sm text-gray-300">
                    Allgemeine Hochschulreife | Sulzbach Saar, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaCode className="text-3xl text-indigo-400" />
              <h2 className="text-3xl font-bold text-white">Fähigkeiten</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-2">
                  <MdWork /> Erfahrung
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Linux / DevOps</span>
                      <span className="text-gray-400 text-sm">(8+ Jahre)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Softwareentwicklung</span>
                      <span className="text-gray-400 text-sm">(6+ Jahre)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">
                        Game / Serverdevelopment
                      </span>
                      <span className="text-gray-400 text-sm">(5+ Jahre)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Webentwicklung</span>
                      <span className="text-gray-400 text-sm">(2+ Jahre)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Internet of Things</span>
                      <span className="text-gray-400 text-sm">(2+ Jahre)</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programmierung */}
              <div>
                <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-2">
                  <FaCode /> Programmierung
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-3">
                      <svg className="transform -rotate-90 w-24 h-24">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#374151"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#6366f1"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.95)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          95%
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-300 text-center">Java</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-3">
                      <svg className="transform -rotate-90 w-24 h-24">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#374151"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#6366f1"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.8)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          80%
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-300 text-center">Databases</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-3">
                      <svg className="transform -rotate-90 w-24 h-24">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#374151"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#6366f1"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          75%
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-300 text-center">
                      Frontend Development
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-2">
                  <FaLanguage /> Sprachen
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Deutsch</span>
                      <span className="text-gray-400 text-sm">(L1)</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${i < 10 ? "bg-indigo-500" : "bg-gray-600"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Englisch</span>
                      <span className="text-gray-400 text-sm">(C1)</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${i < 9 ? "bg-indigo-500" : "bg-gray-600"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Französisch</span>
                      <span className="text-gray-400 text-sm">(A2)</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${i < 5 ? "bg-indigo-500" : "bg-gray-600"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-indigo-300 mb-6">
                  Zusätzliche Erfahrung
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-gray-300">Hosting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-gray-300">Git (incl. CI/CD)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-gray-300">LaTeX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-gray-300">
                      EDV (Microsoft/LibreOffice)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-gray-300">
                      OBS (Streaming / Videoaufnahmen)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}