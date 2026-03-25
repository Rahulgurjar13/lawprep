import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { courses } from "@/data/courseData";
import { ArrowLeft, Star, Calendar, Clock, Users, MapPin, CheckCircle, BookOpen, Phone, ChevronRight, Lock, X, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import NPFWidget from "@/components/landing/NPFWidget";
import DemoCTA from "@/components/landing/DemoCTA";
import BrochureDownload from "@/components/landing/BrochureDownload";
import Footer from "@/components/landing/Footer";
import MobileBottomBar from "@/components/landing/MobileBottomBar";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const CoursePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [feeRevealed, setFeeRevealed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="font-heading text-2xl font-black text-gray-900 mb-4">Course not found.</p>
        <Button onClick={() => navigate("/")} className="rounded-none bg-primary text-white shadow-none">
          ← Back to Home
        </Button>
      </div>
    );
  }

  const relatedCourses = courses.filter((c) => c.slug !== slug);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm font-body font-semibold text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </button>
          <div className="h-4 w-px bg-gray-200" />
          <span className="font-body text-sm text-gray-500 truncate">{course.title}</span>
        </div>
      </div>

      {/* Hero banner */}
      <div
        className="py-12 md:py-16 relative overflow-hidden"
        style={{ backgroundColor: '#e53935' }}
      >
        {/* Decorative background fill — subtle dot grid + radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 65%),
              radial-gradient(circle at 15% 80%, rgba(0,0,0,0.12) 0%, transparent 50%),
              url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff' fill-opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: 'auto, auto, 28px 28px',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div>
              {/* Breadcrumb */}
              <p className="font-body text-xs text-white/80 mb-4 uppercase tracking-widest font-semibold">
                3-Year LLB Coaching › {course.year} › {course.batchLabel}
              </p>
              <h1
                className="font-heading text-white mb-4 leading-tight"
                style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)" }}
              >
                {course.title}
              </h1>
              <p className="font-body text-white/95 text-sm md:text-[15px] mb-6 max-w-xl leading-relaxed">
                {course.tagline}
              </p>
              {/* Stars + Rating */}
              <div className="flex flex-wrap items-center gap-5 mb-6">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-bold text-sm font-body ml-1">
                    {course.rating}
                  </span>
                  <span className="text-white/75 text-sm font-body">
                    ({course.reviews} reviews)
                  </span>
                </div>
              </div>
              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-2 bg-white/15 text-white text-xs font-body font-semibold px-3 py-1.5">
                  <Calendar className="w-3.5 h-3.5 text-white shrink-0" /> Starts: {course.batchStart}
                </span>
                <span className="flex items-center gap-2 bg-white/15 text-white text-xs font-body font-semibold px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5 text-white shrink-0" /> {course.hours} Hours
                </span>
                <span className="flex items-center gap-2 bg-white/15 text-white text-xs font-body font-semibold px-3 py-1.5">
                  <Users className="w-3.5 h-3.5 text-white shrink-0" /> {course.target}
                </span>
              </div>
              {/* Fee — gated until form submit */}
              <div className="mt-2 mb-6">
                {feeRevealed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-wrap items-center gap-3"
                  >
                    <span className="font-heading text-white text-2xl font-black">{course.fee}</span>
                    <span className="font-body text-white/60 line-through text-base">{course.originalFee}</span>
                    <span className="bg-yellow-400 text-gray-900 text-xs font-black px-2.5 py-1">{course.discount}</span>
                    <span className="flex items-center gap-1 bg-white/20 text-white text-xs font-bold px-2.5 py-1">
                      <Unlock className="w-3 h-3" /> Fee Unlocked!
                    </span>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <span className="font-heading text-white text-2xl font-black blur-sm select-none">₹59,500</span>
                      <div className="absolute inset-0" />
                    </div>
                    <span className="font-body text-white/70 line-through text-base blur-sm select-none">₹85,000</span>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="flex items-center gap-2 bg-yellow-400 text-gray-900 text-xs font-black px-3 py-1.5 hover:bg-yellow-300 transition-colors"
                    >
                      <Lock className="w-3 h-3" /> Reveal Fee
                    </button>
                  </div>
                )}
              </div>
              {/* CTA Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a href="tel:+918750581505">
                  <Button className="bg-white text-red-600 rounded-none h-11 px-7 text-sm font-bold hover:bg-gray-100 shadow-none flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us to Enroll
                  </Button>
                </a>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("enroll-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-none h-11 px-5 text-sm font-bold border-white text-white bg-transparent hover:bg-white/15 shadow-none"
                >
                  Get Free Demo
                </Button>
              </div>
            </div>
            {/* Form — desktop sticky */}
            <div id="enroll-form" className="hidden lg:block">
              <div className="bg-white shadow-lg p-1">
                <NPFWidget widgetId="2813f4ab5a613222cb968f1cee3b6603" height="660px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile form — shows BEFORE content on phones */}
      <div className="lg:hidden bg-white border-b border-gray-100 shadow-sm" id="enroll-form">
        <div className="container mx-auto px-4 py-6">
  <NPFWidget widgetId="2813f4ab5a613222cb968f1cee3b6603" height="660px" />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          <div className="space-y-10">

            {/* What you'll get */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-gray-900 mb-5" style={{ fontWeight: 900 }}>
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-gray-700">{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subjects */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-gray-900 mb-5" style={{ fontWeight: 900 }}>
                Subjects Covered
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.subjects.map((s) => (
                  <span key={s} className="bg-primary/10 text-primary font-body text-xs font-semibold px-4 py-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Faculty */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-gray-900 mb-5" style={{ fontWeight: 900 }}>
                Faculty
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.faculty.map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary font-black font-heading flex items-center justify-center shrink-0 text-lg">
                      {f.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body font-bold text-gray-900 text-sm">{f.name}</p>
                      <p className="font-body text-xs text-gray-500">{f.subject}</p>
                      <p className="font-body text-xs text-primary font-semibold">{f.experience} Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Centers */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-gray-900 mb-5" style={{ fontWeight: 900 }}>
                Available Centers
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.centers.map((c) => (
                  <span key={c} className="bg-white border border-gray-100 shadow-sm font-body text-sm px-4 py-2 flex items-center gap-1.5 text-gray-700">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {c}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Eligibility */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-gray-900 mb-3" style={{ fontWeight: 900 }}>
                Eligibility
              </h2>
              <div className="bg-white border border-gray-100 shadow-sm p-4 flex items-start gap-3">
                <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-gray-700">{course.eligibility}</p>
              </div>
            </motion.div>

          </div>

          {/* Right: sticky form — desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-20 bg-white border border-gray-100 shadow-sm p-1">
              <NPFWidget widgetId="2813f4ab5a613222cb968f1cee3b6603" height="660px" />
            </div>
          </div>
        </div>

        {/* ── Related Courses Carousel ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-gray-900" style={{ fontWeight: 900 }}>
              Explore More Courses
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll left"
                className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-white"
              >
                ‹
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll right"
                className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-white"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {relatedCourses.map((rc, i) => (
              <motion.div
                key={rc.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="min-w-[280px] max-w-[320px] bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Card top badge */}
                <div className="bg-primary px-4 py-2 flex items-center justify-between">
                  <span className="font-body text-xs text-white font-semibold uppercase tracking-wide">
                    {rc.batchLabel}
                  </span>
                  {rc.bestselling && (
                    <span className="bg-yellow-400 text-gray-900 text-xs font-black px-2 py-0.5">
                      Bestseller
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-gray-900 mb-1" style={{ fontWeight: 900, fontSize: "1rem" }}>
                    {rc.title}
                  </h3>
                  <p className="font-body text-xs text-gray-500 mb-4 line-clamp-2">{rc.tagline}</p>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="font-body text-xs text-gray-500 ml-1">{rc.rating}</span>
                  </div>

                  <div className="flex gap-3 text-xs font-body text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary" /> {rc.batchStart}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary" /> {rc.hours}h
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {feeRevealed ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-heading text-gray-900 font-black text-base"
                        >
                          {rc.fee}
                        </motion.span>
                      ) : (
                        <>
                          <span className="font-heading text-gray-900 font-black text-base blur-sm select-none">₹??,???</span>
                          <button
                            onClick={() => setModalOpen(true)}
                            className="flex items-center gap-1 text-xs font-black text-primary border border-primary px-2 py-0.5 hover:bg-primary hover:text-white transition-colors"
                          >
                            <Lock className="w-2.5 h-2.5" /> Check Fee
                          </button>
                        </>
                      )}
                    </div>
                    <Link
                      to={`/course/${rc.slug}`}
                      className="flex items-center gap-1 text-xs font-body font-bold text-primary hover:underline"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <DemoCTA />
      <BrochureDownload />
      <Footer />
      <MobileBottomBar />

      {/* ── Fee Reveal Modal ──────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="fee-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              key="fee-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-md z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <NPFWidget widgetId="2813f4ab5a613222cb968f1cee3b6603" height="660px" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursePage;
