import { React } from "./deps.ts";
import Typist from "https://esm.sh/react-typist";
import Hand from "./components/hand.tsx";

function delayGenerator(
  mean: any,
  std: any,
  { line, lineIdx, charIdx, defDelayGenerator }: any,
): number {
  if (charIdx === line.length - 1) {
    return 500;
  }
  return defDelayGenerator();
}

export default function App() {
  const [animated, animate] = React.useState(false);
  return (
    <section className={"page index " + (animated ? "animated" : "")}>
      <Typist
        delayGenerator={delayGenerator}
        className="typist"
        cursor={{
          show: false,
        }}
        onTypingDone={() => animate(true)}
        avgTypingDelay={60}
      >
        <div>
          Hi <Hand />
        </div>

        <div>I am a web developer,</div>

        <div>a web artist in love with minimalism.</div>

        <div>
          My thoughts are on{" "}
          <a className="twitter" href="https://twitter.com/jupegarnica">
            twitter
          </a>
        </div>

        <div>
          And some of my work at{" "}
          <a className="github" href="https://github.com/jupegarnica">github</a>
        </div>
      </Typist>
      <div className="background"></div>
    </section>
  );
}
