const fib2 = n => {
  if(n == 0){
    return [3, 4];
  }else{
    const [prev, next] = fib2(n - 1);
    return [next, prev + next];
  }
}
const fib = n => fib2(n)[0]; //Данная рекрусивная функция позволяет нам вычеслить любое число в последовательности

let sum = 0;
for(let n= 0; fib(n)<7*10**6; n++){  //для определения чисел последовательности задаем простой цикл
    if(fib(n)%2==0){
      sum = sum + fib(n) //и с помощью протсой проверки на четность суммируем все интересующие нас значения

      return sum;
    }}

// выходит, что интересующее нас значение равно 2435422