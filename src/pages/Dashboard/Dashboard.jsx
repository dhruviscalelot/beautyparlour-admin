import { useEffect } from 'react'
import { setPageName } from "../../Store/Action/Auth/Auth_Action";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, Images, Scissors, Sparkles, UsersRound } from 'lucide-react';
import { servicesData } from '../../data/service';
import { galleryData } from '../../data/gallery';


const Dashboard = () => {
  const dispatch = useDispatch();

  const statsData = [
    {
      title: "Total Services",
      value: servicesData.length,
      info: "Active beauty services",
      icon: Scissors,
    },
    {
      title: "Gallery Images",
      value: galleryData.length,
      info: "Published salon photos",
      icon: Images,
    },
    {
      title: "Today Booking",
      value: "18",
      info: "Appointments scheduled",
      icon: CalendarDays,
    },
    {
      title: "Clients",
      value: "246",
      info: "Total customer records",
      icon: UsersRound,
    },
  ];

  const upcomingAppointments = [
    { name: "Priya Shah", service: "Bridal Makeup", time: "10:30 AM", status: "Confirmed" },
    { name: "Nisha Patel", service: "Hair Spa", time: "12:00 PM", status: "Pending" },
    { name: "Aarohi Mehta", service: "Facial", time: "03:15 PM", status: "Confirmed" },
  ];

  const popularServices = servicesData.slice(0, 5);

  useEffect(() => {
    dispatch(setPageName("Dashboard"))
  }, [dispatch]);


  return (
    <>
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        
        <div className="dashboard_stats">
          {statsData.map((item) => {
            const Icon = item.icon;

            return (
              <div className="dashboard_stat_col" key={item.title}>
                <div className="dashboard_stat_card">
                  <div className="dashboard_stat_icon">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <span className="dashboard_stat_title">{item.title}</span>
                    <strong className="dashboard_stat_value">{item.value}</strong>
                    <p className="dashboard_stat_info">{item.info}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap items-start -mx-1.5 lg:-mx-2.5 2xl:-mx-3.5">
          <div className="w-full xl:w-7/12 p-1.5 lg:p-2.5 2xl:p-3.5">
            <div className="dashboard_card">
              <div className="dashboard_card_head">
                <div>
                  <h2 className="dashboard_card_title">Upcoming Appointments</h2>
                  <p className="dashboard_card_text">Today&apos;s latest booking schedule</p>
                </div>
                <Link to="/dashboard" className="btn_secondary w-auto">View All</Link>
              </div>

              <div className="space-y-3">
                {upcomingAppointments.map((item) => (
                  <div className="dashboard_appointment" key={`${item.name}-${item.time}`}>
                    <div className="dashboard_time_icon">
                      <Clock size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-14 md:text-16 font-semibold text-g1 truncate">{item.name}</h3>
                      <p className="text-12 md:text-14 text-g7 truncate">{item.service}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-12 md:text-14 font-semibold text-g1 block">{item.time}</span>
                      <span className={`dashboard_status ${item.status === 'Confirmed' ? 'dashboard_status_success' : 'dashboard_status_pending'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-5/12 p-1.5 lg:p-2.5 2xl:p-3.5">
            <div className="dashboard_card">
              <div className="dashboard_card_head">
                <div>
                  <h2 className="dashboard_card_title">Popular Services</h2>
                  <p className="dashboard_card_text">Most requested salon services</p>
                </div>
                <Link to="/our-services" className="btn_secondary w-auto">Manage</Link>
              </div>

              <div className="space-y-3">
                {popularServices.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="dashboard_service" key={item.id}>
                      <div className="dashboard_service_icon">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-14 md:text-16 font-semibold text-g1 truncate">{item.title}</h3>
                        <p className="text-12 md:text-14 text-g7 truncate">{item.description}</p>
                      </div>
                      <span className="dashboard_rank">#{index + 1}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
