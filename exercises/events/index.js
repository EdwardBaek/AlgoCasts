// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if( this.events[eventName] ) this.events[eventName].push(callback);
    else this.events[eventName] = [callback];
    return this;
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if( this.events[eventName] ) {
      for( let callback of this.events[eventName] ) {
        callback();
      } 
    }
    return this;
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
    return this;
  }
}
// class Events {
//   constructor() {
//     this.events = [];
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     const obj = {};
//     obj[eventName] = callback;
//     this.events.push(obj);
//     return this;
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     for( let event of this.events ) {
//       if( Object.keys(event).includes(eventName) ){
//         event[eventName]();
//       } 
//     }
//     return this;
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     this.events = this.events.filter( v => !Object.keys(v).includes(eventName) )
//     return this;
//   }
// }

module.exports = Events;
