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

        <div className="flex flex-wrap -mx-1.5 lg:-mx-2.5 2xl:-mx-3.5">
          {statsData.map((item) => {
            const Icon = item.icon;

            return (
              <div className="w-full xs:w-1/2 xl:w-1/4 p-1.5 lg:p-2.5 2xl:p-3.5 flex items-center" key={item.title}>
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 md:p-5 min-h-[132px] w-full flex flex-col justify-between main_shadow">
                  <div className="w-11 h-11 2xl:w-12 2xl:h-12 rounded-xl bg-l3 text-primary flex items-center justify-center mb-3">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-12 md:text-14 font-medium text-g7 mb-1">{item.title}</span>
                    <strong className="block font-Prata text-26 md:text-30 2xl:text-36 text-g1 leading-tight">{item.value}</strong>
                    <p className="text-12 md:text-14 text-g7 mt-1 truncate">{item.info}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap items-start -mx-1.5 lg:-mx-2.5 2xl:-mx-3.5">
          <div className="w-full xl:w-7/12 p-1.5 lg:p-2.5 2xl:p-3.5">
            <div className="bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 xl:p-5 main_shadow">
              <div className="flex items-start justify-between mb-4 lg:mb-5">
                <div>
                  <h2 className="text-18 md:text-20 font-semibold text-primary">Upcoming Appointments</h2>
                  <p className="text-12 md:text-14 text-g7 mt-1">Today&apos;s latest booking schedule</p>
                </div>
                <Link to="/dashboard" className="btn_secondary w-auto">View All</Link>
              </div>

              <div className="space-y-3">
                {upcomingAppointments.map((item) => (
                  <div className="flex items-center rounded-xl border border-l2 bg-l4 p-3" key={`${item.name}-${item.time}`}>
                    <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center mr-3 shrink-0">
                      <Clock size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-14 md:text-16 font-semibold text-g1 truncate">{item.name}</h3>
                      <p className="text-12 md:text-14 text-g7 truncate">{item.service}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-12 md:text-14 font-semibold text-g1 block">{item.time}</span>
                      <span className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] md:text-12 font-semibold ${item.status === 'Confirmed' ? 'bg-primary-light text-primary-dark' : 'bg-l2 text-g2'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-5/12 p-1.5 lg:p-2.5 2xl:p-3.5">
            <div className="bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 xl:p-5 main_shadow">
              <div className="flex items-start justify-between mb-4 lg:mb-5">
                <div>
                  <h2 className="text-18 md:text-20 font-semibold text-primary">Popular Services</h2>
                  <p className="text-12 md:text-14 text-g7 mt-1">Most requested salon services</p>
                </div>
                <Link to="/our-services" className="btn_secondary w-auto">Manage</Link>
              </div>

              <div className="space-y-3">
                {popularServices.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex items-center rounded-xl border border-l2 bg-l4 p-3" key={item.id}>
                      <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center mr-3 shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-14 md:text-16 font-semibold text-g1 truncate">{item.title}</h3>
                        <p className="text-12 md:text-14 text-g7 truncate">{item.description}</p>
                      </div>
                      <span className="ml-3 text-12 md:text-14 font-bold text-primary shrink-0">#{index + 1}</span>
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
