const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto md:min-h-screen flex flex-col md:flex-row gap-12 items-center px-6 py-24 md:py-0">
        <img
          src="/foto.png"
          alt="profile-photo"
          className="w-62 md:w-78 h-62 md:h-78 rounded-full border border-[#E5E7EB]"
        />
        <div className="flex flex-col gap-2 md:gap-4 text-center md:text-justify items-center md:items-start">
          <p className="font-semibold text-sm md:text-base text-[#38BDF8]">
            Halo, perkenalkan saya Ahmad Zaki Alghifari
          </p>
          <h1 className="font-extrabold text-4xl lg:text-6xl text-white tracking-tight">
            Web Developer
          </h1>
          <p className="text-sm md:text-lg text-[#94A3B8]">
            Mahasiswa Teknik Informatika di Politeknik Negeri Pontianak yang
            memiliki fokus dan ketertarikan besar di dunia web development. Saya
            bersemangat dalam mengubah ide-ide kreatif menjadi aplikasi web yang
            interaktif, fungsional, dan memberikan solusi nyata.
          </p>

          <div className="flex gap-4 mt-2 md:mt-0 text-sm md:text-base">
            <a
              href="#projects"
              className="bg-[#38BDF8] px-8 py-3 font-semibold rounded-4xl hover:bg-[#7DD3FC] transition-colors duration-300"
            >
              Lihat Proyek
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-zaki-alghifari-732035314/"
              target="_blank"
              className="border border-[#475569] text-white px-8 py-3 font-semibold rounded-4xl hover:bg-[#1E293B] transition-colors duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
