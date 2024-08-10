import Darkmode from "./Darkmode";

function Intro() {
  return (
    <div>
      <p className="bg-blue-500 p-2">if you see any {"{/* */}"} just ignores them. They don't do nothing besides explaining the context of the code.</p>
      <br />
      <Darkmode />
      <code className="text-6xl">React 101</code>
      <h2 className="text-2xl my-5">5 days crucial react 101</h2>
      <b className="text-xl">Hi, Everyone! 🌟</b>
      <img className="w-1/4" src="https://media1.tenor.com/m/2wPCzBrKJP8AAAAC/hyper-anime.gif" alt="hi" />
      <p className="text-xl">Today I want to show you things that I've been learned and I consider as crucial on react, I learned it from a mini bootcamp that held by <a className="text-blue-500" href="https://www.linkedin.com/company/prosigmaka/posts/?feedView=all">Prosigmaka</a><br />
      Check them out! 
      <p className="text-xl">Lastly, this site was built with react.js and tailwind. you can check the repository on <a className="text-blue-500" href="github.com/riveong">here</a></p>
      There are 5 crucial things that you need to know about react, they are:
      <ul className="list-disc list-inside">
        <li>Component</li> 
        <li>Props</li>
        <li>Map</li>
        <li>Event</li>
        <li>State</li>
      </ul>
      <br />
      <p className="text-xl">Prerequisite:</p>
      <ul className="list-disc list-inside">
        <li>Basic HTML</li>
        <li>Basic CSS</li>
        <li>Basic Javascript</li>
        <li>Healthy mental and mind</li>
      </ul>
      <br />
      <p>I hope you enjoy this site and happy coding! 🚀</p>
      <br/>
      <p className="bg-gray-300 p-2">note: if you ever get confused by my code or my explanation you can check the source code <a className="text-blue-500" href="github.com/riveong">here</a></p>
      </p>
      <br />
    </div>
  );
}

export default Intro;