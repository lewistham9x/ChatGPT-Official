import ChatGPT from "../src/index.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let bot = new ChatGPT(process.env.OPENAI_API_KEY as string);

async function main() {
  while (true) {
    let prompt = await new Promise((resolve) => {
      rl.question("You: ", (answer) => {
        resolve(answer);
      });
    });

    let response = await bot.ask(prompt);
    console.log(`ChatGPT: ${response}`);
  }
}

main();