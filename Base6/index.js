
/**
 * startApp - Starts the applucation
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log("Welcome to "+name+"'s application!")
  console.log("--------------------")
}


/**
 * onDataReceived - Decides what to do depending on the data that was received
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  } else if(text === 'help\n'){
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * unknownCommand - Runs when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * hello - Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * quit - exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * help - display lists of all the possible commands
 * @returns {void}
 * */
function help() {
  console.log("Base6 available command\n" +
      "*****************\n" +
      "hello: Says hello\n" +
      "quit: exits the application\n" +
      "exit: exits the application\n"
  );

}

// STARTING THE APPLICATION HERE!
startApp("Gaby Karam")
