import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { FiHome, FiCalendar, FiUser, FiLogOut, FiSettings, FiBell, FiPlus, FiClock, FiMapPin } from 'react-icons/fi';

const Appointments = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // Mock appointments data
  const [appointments] = useState([
    {
      id: 1,
      service: 'Haircut',
      barber: 'João Silva',
      date: '2024-01-15',
      time: '14:00',
      status: 'confirmed',
      location: 'Barber Shop Downtown'
    },
    {
      id: 2,
      service: 'Beard Trim',
      barber: 'Maria Santos',
      date: '2024-01-20',
      time: '10:30',
      status: 'pending',
      location: 'Barber Shop Downtown'
    }
  ]);

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
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Appointments
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiBell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiSettings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FiLogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => handleNavigation('/dashboard')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
            >
              <FiHome className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavigation('/appointments')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Appointments</span>
            </button>
            <button
              onClick={() => handleNavigation('/profile')}
              className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
            >
              <FiUser className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header with Book Appointment button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Appointments
            </h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FiPlus className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {appointments.length === 0 ? (
              <div className="text-center py-12">
                <FiCalendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No appointments</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Get started by booking your first appointment.
                </p>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    <FiPlus className="w-4 h-4 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </div>
            ) : (
              appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {appointment.service}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            appointment.status
                          )}`}
                        >
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <FiUser className="w-4 h-4 mr-2" />
                          <span>Barber: {appointment.barber}</span>
                        </div>
                        <div className="flex items-center">
                          <FiClock className="w-4 h-4 mr-2" />
                          <span>
                            {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FiMapPin className="w-4 h-4 mr-2" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6 flex space-x-2">
                      <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        Reschedule
                      </button>
                      <button className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments; 