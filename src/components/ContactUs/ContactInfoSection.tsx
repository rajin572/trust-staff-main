import { MdEmail, MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";
import ContactInfoCard from "../shared/Cards/ContactInfoCard";
import { getCalendlyUrl } from "@/helpers/envConfig";


export default function ContactInfoSection() {
  const calendlyUrl = getCalendlyUrl();

  const contactInfoList = [
    {
      icon: <MdEmail className="w-6 h-6" />,
      label: "Email",
      value: "support@truststaff.ai",
      href: "mailto:support@truststaff.ai",
    },
    {
      icon: <MdLocationOn className="w-6 h-6" />,
      label: "Address",
      value: "124–128 City Road, Gulshan, Dhaka, Bangladesh",
      href: "https://maps.app.goo.gl/HTjEhMrmc3MXg6aT8",
    },
    {
      icon: <MdAccessTime className="w-6 h-6" />,
      label: "Operating Hours",
      value: "Monday – Friday | 9:00 AM – 6:00 PM",
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      label: "Book a meeting",
      value: "Schedule a call with us",
      href: calendlyUrl,
      variant: "button" as const,
    },
  ];


  return (
    <div className="space-y-4">
      {contactInfoList.map((item, index) => (
        <ContactInfoCard key={index} data={item} />
      ))}
    </div>
  );
}
