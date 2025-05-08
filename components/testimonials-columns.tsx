"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Daksh completely transformed our outdated platform into a modern, scalable solution. From backend APIs to frontend finesse, he handled everything with precision.",
    imageSrc: "/avatars/1.webp",
    name: "Briana Patton",
    role: "Product Owner",
  },
  {
    text: "What impressed me most about Daksh was his ability to deeply understand our business logic and translate it into clean, maintainable code—fast. A true technical partner.",
    imageSrc: "/avatars/2.webp",
    name: "Bilal Ahmed",
    role: "CTO",
  },
  {
    text: "Our dashboard went from clunky and slow to fast, responsive, and beautiful—all thanks to Daksh’s frontend craftsmanship and attention to detail.",
    imageSrc: "/avatars/3.webp",
    name: "Saman Malik",
    role: "UI/UX Designer",
  },
  {
    text: "We launched ahead of schedule because Daksh tackled complex issues with calm precision. His problem-solving skills are world-class, and he never compromises on quality.",
    imageSrc: "/avatars/4.webp",
    name: "Omar Raza",
    role: "Engineering Manager",
  },
  {
    text: "Daksh’s full-stack expertise made communication seamless and accelerated development. The performance boost we saw after his contributions was massive.",
    imageSrc: "/avatars/5.webp",
    name: "Zainab Hussain",
    role: "Team Lead",
  },
  {
    text: "Daksh dove into our legacy code, cleaned it up, introduced scalable practices, and even set up CI/CD pipelines that saved us hours every week.",
    imageSrc: "/avatars/6.webp",
    name: "Aliza Khan",
    role: "DevOps Engineer",
  },
  {
    text: "Not only did Daksh deliver features rapidly, but he also laid down clean architectural foundations that we’re still building on today.",
    imageSrc: "/avatars/7.webp",
    name: "Farhan Siddiqui",
    role: "Founder",
  },
  {
    text: "From sprint planning to deployment, Daksh owned the full dev lifecycle. His proactive updates and flexibility made him a key player on our team.",
    imageSrc: "/avatars/8.webp",
    name: "Sana Sheikh",
    role: "Scrum Master",
  },
  {
    text: "Daksh optimized everything—SEO, performance, accessibility. Our site metrics skyrocketed after his work. He’s a brilliant full-stack developer.",
    imageSrc: "/avatars/9.webp",
    name: "Hassan Ali",
    role: "Digital Marketing Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={`https://api.dicebear.com/9.x/glass/svg?seed=${name}`}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const TestimonialComponent = () => {
  return (
    <section className="my-20 relative">

      <div className="container z-10 mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div> */}

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};