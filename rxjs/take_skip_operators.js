import { Observable } from 'rxjs';
import { take,skip } from 'rxjs/operators';

/*
  
  take(x) : 
  When you are interested in only the first x emission, you want to use take. 
  
  skip(x) :
  Skip allows you to ignore the first x emissions from the source. 
 
 */


const myObservable = new Observable(function subscribe(subscriber){
  try{
    subscriber.next('one');
    subscriber.next('two');
    throw Error('eno aitu guru');
    subscriber.complete();
  }catch(err){
    subscriber.error(err);
  }
});

// in below code , replace take() with skip()
myObservable.pipe(take(1)).subscribe({
  next(x) {console.log(x);},
  error(err) {console.log('ya uru guru nindu')},
  complete() {console.log('its done')}
});
