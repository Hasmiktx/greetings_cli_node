import{program} from"commander";
import chalk from "chalk";
import dayjs from "dayjs";


const greetings = {
  English: 'Hello',
  Spanish: 'Hola',
  French: 'Bonjour',
  German: 'Hallo',
  Italian: 'Ciao',
}


program
  .version("1.0.0")
  .description("Node Greetings CLI")
  .option("-n, --name <type>", "Add your name","guest")
  .option("-g, --greeting <type>", "Add your greeting")
  .option("-lvl, --level <type>", "1 or 2","1")
  .option("-l, --language <type>", "Choose language","English")



  .action((options) => {
     const {name,greeting,level,language}=program.opts();
      let greetingWithLanguage= greeting? greeting: greetings[language]
     if(level == 2){
        const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
        console.log(chalk.blue(`${greetingWithLanguage}, ${name}! ( Date and Time: ${time})`));
      }else{
        console.log(chalk.yellow(`${greetingWithLanguage} ${name}!`))
      }
  });

 program.parse(process.argv);
