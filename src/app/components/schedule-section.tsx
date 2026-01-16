import { Clock, Users } from "lucide-react";
import React from "react";

export function ScheduleSection() {
  const schedule = [
    {
      day: "LUN",
      classes: [
        { time: "07:00", name: "Yoga", instructor: "María G." },
        { time: "10:00", name: "CrossFit", instructor: "Carlos R." },
        { time: "18:00", name: "Spinning", instructor: "Ana L." },
        { time: "19:30", name: "Funcional", instructor: "Pedro M." },
      ],
    },
    {
      day: "MAR",
      classes: [
        { time: "07:00", name: "Pilates", instructor: "Laura S." },
        { time: "10:00", name: "Boxing", instructor: "Miguel A." },
        { time: "18:00", name: "Zumba", instructor: "Sofia V." },
        { time: "19:30", name: "HIIT", instructor: "Carlos R." },
      ],
    },
    {
      day: "MIÉ",
      classes: [
        { time: "07:00", name: "Yoga", instructor: "María G." },
        { time: "10:00", name: "Funcional", instructor: "Pedro M." },
        { time: "18:00", name: "CrossFit", instructor: "Carlos R." },
        { time: "19:30", name: "Spinning", instructor: "Ana L." },
      ],
    },
    {
      day: "JUE",
      classes: [
        { time: "07:00", name: "Pilates", instructor: "Laura S." },
        { time: "10:00", name: "HIIT", instructor: "Carlos R." },
        { time: "18:00", name: "Boxing", instructor: "Miguel A." },
        { time: "19:30", name: "Zumba", instructor: "Sofia V." },
      ],
    },
    {
      day: "VIE",
      classes: [
        { time: "07:00", name: "Yoga", instructor: "María G." },
        { time: "10:00", name: "CrossFit", instructor: "Carlos R." },
        { time: "18:00", name: "Funcional", instructor: "Pedro M." },
        { time: "19:30", name: "Spinning", instructor: "Ana L." },
      ],
    },
    {
      day: "SÁB",
      classes: [
        { time: "09:00", name: "Yoga", instructor: "María G." },
        { time: "10:30", name: "CrossFit", instructor: "Carlos R." },
        { time: "12:00", name: "Zumba", instructor: "Sofia V." },
      ],
    },
    {
      day: "DOM",
      classes: [
        { time: "09:00", name: "Pilates", instructor: "Laura S." },
        { time: "10:30", name: "Yoga", instructor: "María G." },
      ],
    },
  ];

  return (
    <section id="horarios" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            HORARIOS DE CLASES
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400">
            Encuentra la clase perfecta para tu rutina
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="grid grid-cols-8 gap-4 min-w-[900px]">
              {/* Header con días */}
              <div className="bg-zinc-800 rounded-lg p-4 font-bold text-center">
                HORA
              </div>
              {schedule.map((day, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-lg p-4 font-bold text-center text-orange-500"
                >
                  {day.day}
                </div>
              ))}

              {/* Filas de horarios */}
              {["07:00", "09:00", "10:00", "10:30", "12:00", "18:00", "19:30"].flatMap(
                (time) => [
                  <div
                    key={`time-${time}`}
                    className="bg-zinc-800/50 rounded-lg p-3 font-medium text-center flex items-center justify-center"
                  >
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    {time}
                  </div>,
                  ...schedule.map((day, dayIndex) => {
                    const classInfo = day.classes.find(
                      (c) => c.time === time
                    );
                    return (
                      <div
                        key={`${time}-${dayIndex}`}
                        className={`rounded-lg p-3 ${
                          classInfo
                            ? "bg-orange-500/20 border border-orange-500/40 hover:bg-orange-500/30 cursor-pointer transition-colors"
                            : "bg-zinc-800/20"
                        }`}
                      >
                        {classInfo && (
                          <div>
                            <p className="font-bold text-sm">
                              {classInfo.name}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {classInfo.instructor}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  }),
                ]
              )}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-zinc-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  {day.day}
                </h3>
                <div className="space-y-3">
                  {day.classes.map((classInfo, classIndex) => (
                    <div
                      key={classIndex}
                      className="bg-zinc-900 rounded-lg p-4 hover:bg-orange-500/10 transition-colors cursor-pointer border border-zinc-700 hover:border-orange-500/40"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2 text-orange-500 font-bold">
                          <Clock className="w-4 h-4" />
                          {classInfo.time}
                        </span>
                        <span className="text-lg font-bold">
                          {classInfo.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {classInfo.instructor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            ¿Quieres reservar una clase? Contáctanos
          </p>
          <a
            href="#inscribirse"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-zinc-900 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            RESERVAR AHORA
          </a>
        </div>
      </div>
    </section>
  );
}