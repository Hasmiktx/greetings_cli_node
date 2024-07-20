import{program} from"commander";
import chalk from "chalk";
import dayjs from "dayjs";

program
  .version("1.0.0")
  .description("Node Greetings CLI")
  .option("-n, --name <type>", "Add your name","guest")
  .option("-g, --greeting <type>", "Add your greeting","Hello")
  .option("-lvl, --level <type>", "1 or 2","1")
  .option("-l, --language <type>", "Choose language","English")



  .action((options) => {
     const {name,greeting,level,language}=program.opts();

     if(level == 2){
        const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
        console.log(chalk.blue(`${greeting}, ${name}! ( Date and Time: ${time})`));
      }else{
        console.log(chalk.yellow(`${greeting} ${name}!`))
      }
  });

 program.parse(process.argv);
