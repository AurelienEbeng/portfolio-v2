const Footer = () => {
  return (
    <div className="w-full px-10 py-6 bg-[#222222] text-white flex justify-between items-center">
        <div>© Aurelien Ebeng 2025</div>
        <div>
          <a
            href="https://github.com/AurelienEbeng"
            target="blank"
            className="m-5"
          >
            <span className="tech-logo github-logo text-white"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/aurelien-ebeng/"
            target="blank"
          >
            <span className="tech-logo linkedin-logo"></span>
          </a>
        </div>
    </div>
  )
}

export default Footer