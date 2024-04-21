import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center justify-center gap-2">
          <img src="src/assets/logo.png" alt="sumz_logo" className="w-12" />
          <h2 className="text-2xl font-bold">Simply Sumz</h2>
        </div>
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/YewRen/Simply-Sumz");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Enhance your reading experience with Simply Summize, an open-source
        article summarizer designed to condense lengthy articles into succinct
        and comprehensible summaries.
      </h2>
    </header>
  );
};

export default Hero;
