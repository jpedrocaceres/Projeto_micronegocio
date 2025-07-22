import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { FiHome, FiCalendar, FiUser, FiLogOut, FiSettings, FiBell, FiScissors, FiClock, FiDollarSign, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const BarberDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  // Mock data for barber dashboard
  const [todayAppointments] = useState([
    {
      id: 1,
      customer: "John Smith",
      service: "Hair Cut & Styling",
      time: "10:00 AM",
      duration: "45 min",
      price: "$50",
      status: "completed"
    },
    {
      id: 2,
      customer: "Mike Johnson",
      service: "Beard Trim",
      time: "11:30 AM",
      duration: "30 min",
      price: "$25",
      status: "in-progress"
    },
    {
      id: 3,
      customer: "David Wilson",
      service: "Full Service",
      time: "2:00 PM",
      duration: "60 min",
      price: "$75",
      status: "scheduled"
    },
    {
      id: 4,
      customer: "Robert Brown",
      service: "Hair Wash",
      time: "3:30 PM",
      duration: "20 min",
      price: "$15",
      status: "scheduled"
    }
  ]);

  const [stats] = useState({
    todayAppointments: 5,
    completedToday: 2,
    totalEarnings: 125,
    averageRating: 4.8
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
              <h1 className="ml-2 md:ml-0 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Barber Dashboard
              </h1>
            </div>

            {/* Header actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FiMoon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiBell className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiSettings className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center space-x-2 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FiLogOut className="w-4 h-4" />
                <span className="hidden lg:inline">Logout</span>
              </button>
              {/* Mobile logout */}
              <button
                onClick={handleLogout}
                className="sm:hidden p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <FiLogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => {
                handleNavigation('/barber-dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <FiHome className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => {
                handleNavigation('/appointments');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiCalendar className="w-5 h-5" />
              <span>Appointments</span>
            </button>
            <button
              onClick={() => {
                handleNavigation('/services');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiScissors className="w-5 h-5" />
              <span>Services</span>
            </button>
            <button
              onClick={() => {
                handleNavigation('/barber-shop-app');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 py-3 px-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiUser className="w-5 h-5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => handleNavigation('/barber-dashboard')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium"
            >
              <FiHome className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => handleNavigation('/appointments')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Appointments</span>
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
            >
              <FiScissors className="w-4 h-4" />
              <span>Services</span>
            </button>
            <button
              onClick={() => handleNavigation('/profile')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
            >
              <FiUser className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <div className="p-3 sm:p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiCalendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="ml-3 sm:ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Today's Appointments
                    </dt>
                    <dd className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                      {stats.todayAppointments}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <div className="p-3 sm:p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiClock className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div className="ml-3 sm:ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Completed Today
                    </dt>
                    <dd className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                      {stats.completedToday}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <div className="p-3 sm:p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiDollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                </div>
                <div className="ml-3 sm:ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Today's Earnings
                    </dt>
                    <dd className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                      ${stats.totalEarnings}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <div className="p-3 sm:p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiUser className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div className="ml-3 sm:ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Average Rating
                    </dt>
                    <dd className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                      {stats.averageRating} ⭐
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg hover:shadow-md transition-shadow">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
              Today's Appointments
            </h3>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="px-4 sm:px-6 py-3 sm:py-4">
                {/* Mobile Layout */}
                <div className="sm:hidden">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        <FiUser className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-3 min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {appointment.customer}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {appointment.service}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FiClock className="w-3 h-3 mr-1" />
                      {appointment.time} ({appointment.duration})
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {appointment.price}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FiUser className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {appointment.customer}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {appointment.service}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <FiClock className="inline w-4 h-4 mr-1" />
                      {appointment.time} ({appointment.duration})
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {appointment.price}
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BarberDashboard; 