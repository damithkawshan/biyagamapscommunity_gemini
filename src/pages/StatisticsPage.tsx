import { Users, Briefcase, Home, Building2, MapPin, Shield, CircleDot, Trophy, School, Recycle, BookOpen, Flame } from "lucide-react";
import statsImage from "figma:asset/396ca1a2e22b1a27ac94973f1f32fa86773a7ac2.png";
import { Card, CardContent } from "../components/ui/card";
import { CounterAnimation } from "../components/CounterAnimation";

export function StatisticsPage() {
  const statistics = [
    {
      icon: MapPin,
      value: 61.6,
      label: "වර්ග කිලෝමීටර",
      labelEn: "Sq. Km"
    },
    {
      icon: Users,
      value: 207714,
      label: "ජනගහනය",
      labelEn: "Population (2021)"
    },
    {
      icon: Briefcase,
      value: 126238,
      label: "ලියාපදිංචි ඡන්දදායකයින්",
      labelEn: "Registered Voters"
    },
    {
      icon: Home,
      value: 49,
      label: "ලාභාන්විත වාසී",
      labelEn: "Beneficiaries"
    },
    {
      icon: Building2,
      value: 55,
      label: "ගම්මාන සංඛ්‍යාව",
      labelEn: "Villages"
    },
    {
      icon: Shield,
      value: 211,
      label: "අසුරක්ෂිත ස්ථාන",
      labelEn: "Vulnerable Places"
    },
    {
      icon: CircleDot,
      value: 3,
      label: "දිව කොට්ඨාස",
      labelEn: "Divisions"
    }
  ];

  const facilities = [
    {
      icon: Trophy,
      value: 16,
      label: "ක්‍රීඩා පිටිය",
      labelEn: "Sports Grounds"
    },
    {
      icon: School,
      value: 22,
      label: "ප්‍රජා ශාලා",
      labelEn: "Community Halls"
    },
    {
      icon: Recycle,
      value: 11,
      label: "අපද්‍රව්‍ය කොම්පෝස්ට්",
      labelEn: "Waste Compost"
    },
    {
      icon: BookOpen,
      value: 32,
      label: "පුස්තකාල ශාලා",
      labelEn: "Libraries"
    },
    {
      icon: Flame,
      value: 3,
      label: "ගිනි නිවාපාලන",
      labelEn: "Fire Stations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={statsImage}
          alt="Biyagama Statistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">බියගම ප්‍රාදේශීය සභාව</h1>
            <p className="text-xl">Biyagama Pradeshiya Sabha</p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              1987 දෙසැම්බර් 15 දින ප්‍රාදේශීය සභා පනත යටතේ මීගමුව ප්‍රාදේශීය සභාව පිහිටුවීමෙන්පසු, CS සභාපතිවරයාගේ හා භූමි භාගයේ කොමසාරිස් 21ක් සම්මිලිත වී 1995 අප්‍රේල් මස 20 වන දින සංස්කරණය කරන ලදී.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1995.04.21 දැන්වීම අංක 867/21 දරන ගැසට් පත්‍රයේ පළමු සංස්කරණ සහතින් මීගමුවේ සභාපතිය වී ඇති බියගම ප්‍රාදේශීය සභාව
            </p>
            <p className="text-gray-700 leading-relaxed">
              1995.06.01 දින දීන් ආරම්භ වීය. විධායකාධිපති පද්ධති කොළඹ දිස්ත්‍රික්කයාවේ පළමු දිස්ත්‍රික් කොළඹ දිස්ත්‍රික්කයාවේ ලේකම් තුමාගේ 03ක් අක් අධිකාරිත්වය යටතේ දක්වනු ඇත.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">සංඛ්‍යාන කොටස් / Statistics</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CounterAnimation 
                  end={stat.value} 
                  className="text-3xl mb-2"
                />
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.labelEn}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="mb-8">
          <h2 className="text-3xl mb-2">පහසුකම් / Facilities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <facility.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <CounterAnimation 
                  end={facility.value} 
                  className="text-3xl mb-2"
                />
                <div className="text-sm text-gray-600">{facility.label}</div>
                <div className="text-xs text-gray-500">{facility.labelEn}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
