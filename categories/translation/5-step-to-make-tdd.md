# 쉬운 테스트 주도 개발과 단위 테스트를 위한 5단계 방법론

## 읽기전에

이 글은 Jani Hartikainen의 [5 step method to make test-driven development and unit testing easy](https://codeutopia.net/blog/2016/10/10/5-step-method-to-make-test-driven-development-and-unit-testing-easy/)를 한글로 번역한 글입니다. 

테스트 주도 개발방식은 비단 프로그래밍뿐 아니라 다른 분야에서도 통하는, 앎에 대한 일반적인 교훈을 던집니다. [Anthony Wellington "Four Levels of Awareness" for a musician. From Victor Wooten:Groove Workshop](https://www.youtube.com/watch?v=9Rhvxy0r2Do) 실패하는 테스트 코드의 작성은 "Unconscious Not Knowing"에서 "Conscious Not Knowing"으로의 이행처럼 느껴집니다. 웹에서 이 글을 발견하고, "정확하고 올바른" 내용인지는 모르지만 번역하고, 테스트 코드에 대해서 조금이나마 더 알게됐습니다. 마치고 나니 제가 개발을 공부하며 블로그에 쓰는 글 또한 의식의 4단계, 내지는 TDD의 일부분이라는 생각도 듭니다.

What’s the hardest thing in test-driven development or unit testing in general?

Writing tests!

The syntax or the tools aren’t the problem – you can learn those enough to get started in 15 minutes.

The problem is how to take some vague idea in your head about what you want to do, and turn it into something that verifies some function works… *before you even wrote the damn thing!*

People tell you to use TDD. But how can you possibly write a test for something that doesn’t exist? I don’t even know what the function is going to do yet – or if I actually want two functions instead of one – and instead you want me to think of a test for it? Are you crazy?

How do all those people who tell you to use TDD do it?

That’s the thing – test-driven development requires thinking of your code in a different way. And nobody ever tells you how to do that.

Until now.


## How to take a vague idea and turn it into tests

Let me walk you through a system that you can use to do just that – take any kind of idea for what you want to do, and turn it into something tangible, and thus, testable.


I use test-driven development a lot. This is based on exactly the kind of thought process that I go through as I write tests for my code.
나는 테스트 주도 개발을 매우 많이 사용한다. 이 글은 내 코드를 위한 테스트를 작성할 때와 같은 사고과정에 근거한다.

This isn’t going to be about the technical details, such as “red-green-refactor”. Rather, I want to focus on the thought process that goes on when a seasoned developer writes code with TDD, and which makes it easy to do.
이 글은 "빨강-초록-리팩터" 같은, 기술적 세부사항에 대한 것이 아니다. 그보다, 숙련된 개발자가 TDD로 코드를 작성할 때 일어나는 사고과정과 이를 쉽게 하는 것에 집중한다.

Remember: All it takes is adjusting your thinking. Yes – it might take some conscious effort at first, but once you do it enough, it becomes routine. Just like writing loops and conditionals, writing tests becomes something that you just do without having to think about it a lot.
기억해둘 점: 생각을 adjusting하기만 하면 된다. 그렇다 – 맨 처음엔 의식적인 노력이 다소 필요하지만, 충분히 노력하면 일상적인 것이 된다. 반복문과 조건문을 쓰듯, 테스트 코드를 작성하는 것은 생각을 많이 하지 않고 그냥 하는 것이 된다.

**Let’s start with our first example:** Calculating password strength.
**첫번째 예제:** 비밀번호 강도 계산.

As I started writing this article, I just pulled that idea out of a hat. I’ve never written code to do that until now – I’m going into this as blindly as you would go into writing any real code.
내가 이 글을 쓰기 시작했을 때, 막 떠올린 생각이다. 지금까지 한번도 구현 코드를 작성하지 않았다 – 나는 당신이 실제로 코드를 작성할 때와 비슷하게 더듬더듬 시작할 것이다.

**Before we go into the process, there’s one important thing to know.** Perfection isn’t the goal! Test-driven development is an iterative process, meaning you work in small repeating steps. Yes, we want to make a good educated guess, but it doesn’t have to be exactly right. Don’t get stuck thinking of some tiny detail, because in software, things always change. One of the great things about TDD is that it makes change easier, so if we don’t get this 100% right on the first try, we’ll just do it again. And that’s exactly how it should be!
**시작하기 전에, 당신이 알아야 할 한가지 중요한 점이 있다.** 목표는 완벽이 아니다! 테스트-주도 개발은 반복적인 과정으로, 작은 절차들의 반복적인 수행을 의미한다. 그렇다, 우리는 경험에 근거한 좋은 추측을 하고싶은 것이지, 정확히 옳아야하는 것은 아니다. 어떤 작은 디테일을 고민하느라 멈추지 마라, 왜냐하면 소프트웨어란 항상 변하게 마련이다. TDD의 가장 좋은 점은 변경이 쉬운 것이고, 때문에 첫 시도에 100% 정답을 구하지 않으며, 다시 할 뿐이다. 그리고 그것이 exactly how it shoud be!

## Step 1: Decide the inputs and outputs
## 과정 1: 입력과 출력의 결정

We start this process from a high level. We don’t care about the implementation just yet.
우리는 이 과정을 고차원에서부터 시작할 것이다. 당장에는 구현에 대해 신경쓰지 않을 것이다.

We have the goal: Calculate password strength. To get to that goal, we usually need some inputs… and then, we get some output based on them.
우리의 목표: 비밀번호 강도의 계산. 이를 위해서 보통은 입력값들이 필요하고... 그 다음에, 그에 근거한 출력값을 얻을 것이다.

When you normally start writing code to get to some goal, you’d probably start with a function. You’d probably think of what data the function needs to work, and what kind of results it will give back. We can start this process by doing exactly that – we just won’t write any code for it yet.
일반적으로 어떤 목표를 위해 코드를 작성하기 시작한다면, 아마 당신은 함수로 운을 뗄 것이다. 대개는 함수의 동작에 어떤 데이터가 필요한지, 그리고 어떤 종류의 결과를 반환할 지 등을 생각한다. 우리는 그와 똑같이 절차를 시작할 것이다 – 다만 아직 어떤 코드도 작성하지 않을 것이다.

So how would this work?
그래서 어떻게 하면 될까?

* The input is easy: It has to be the password.
* 입력값은 쉽다: 비밀번호가 될 것이다.
* The output is also easy: It has to be some value describing the strength of the password. To keep things simple, let’s say the password is either strong or it isn’t – so we can use a boolean value for the output.
* 결과값 역시 쉽다: 비밀번호의 강도를 나타내는 어떤 값이 되어야 한다. 간단하게 하려면, 비밀번호가 강력하거나 그렇지 않다고 할 수 있다 – 즉 boolean 값을 출력에 사용할 수 있다.

## Step 2: Choose function signature
## 과정 2: 함수 시그니처 선택

Now that we know what data goes in and what comes out, we need to choose the function signature – that is, what parameters the function takes, and whether it returns something.
이제 어떤 데이터가 들어오고 나가는지 알았으니, 우리는 함수 시그니처를 골라야 한다 – 즉 함수가 어떤 매개변수들을 취하며, 그것이 무언가 반환을 할 것인지 여부를 말한다.

This step is again similar to how you would approach writing code without TDD. Before you can write any code for a function, you need to decide what its parameters and return values are.
이번 과정도 TDD와 무관하게 당신이 코드 작성에 접근하는 방법과 비슷하다. 어떤 함수 코드든 작성하기 전에, 당신은 매개변수와 반환 값이 무엇이 될 지 정해야 한다.

First, the parameters. What does our function need to work? In this case, it’s simple – all it requires is the password. We can do the whole calculation based entirely on that value, and that value alone.
먼저, 매개변수. 우리의 함수는 어떤 동작을 해야할까? 이 예제에서는, 간단한데 – 필요한 것은 비밀번호 뿐이다. 우리는 단 하나의 값에만 의존하여 모든 연산을 할 수 있다.

What about the return value? Simple, since this is a calculation, we can return the result directly. In some more complex cases, the return value might be a promise. Or, instead of returning a value, the function might take a callback parameter – or it might just not return anything at all.
반환값은 어떨까? 계산이기 때문에 간단한데, 결과를 바로 반환할 수 있다. 보다 복잡한 상황이라면, 반환값은 `Promise` 가 된다. 또는 값을 반환하는 대신, 콜백 매개변수를 취하거나 – 아무것도 반환하지 않을 수도 있다.

Either way, at this point, we can now decide what calling the function would look like in code:
어쨌든간에, 이 시점에서 함수 호출이 어떻게 생긴 코드인지 결정할 수 있다:

```js
var strong = isStrongPassword('password string goes here');
```

## Step 3: Decide on one tiny aspect of the functionality
## 과정 3: 

We now know the goal, the data involved and the function signature.
이제 우리는 목표, 관련 데이터와 함수 시그니처를 알고있다.

In a non-TDD workflow, you’d jump into writing code for the function now. You might already have some ideas on how this would work – we need to check for this, we need to check for that, the return value is affected by X…
TDD가 아닌 워크플로우라면, 이제 당신은 코드 작성에 뛰어들 것이다. 아마 당신은 이미 작동 방식에 대해 몇가지 아이디어가 있을 것이다 – 이걸 확인해야 하고, 저걸 확인해야하고, 반환값은 X에 의해 영향받고...

This is where most people run into trouble with TDD. Your head is filled with all these ideas on how to write the function… but you’re not sure of exactly how to lay out the code until you start writing it.
TDD에 있어서 대부분의 사람들이 곤란에 빠지는 지점이 여기다. 당신의 머릿속은 함수를 어떻게 작성할 것인가에 대한 생각들로 가득찼지만... 작성을 시작할 때까지 당신은 코드를 정확히 어떻게 설계할 지 확신할 수 없다.

Instead of thinking of all the choices… let’s focus on one tiny thing only.
모든 선택지에 대해 생각하는 대신에... 오직 작은 것에만 집중해보자.

What is the *simplest possible behavior* that we need to get a tiny bit closer to our goal?
목표에 미세하게나마 다가가기 위해서 우리에게 필요한 *가능한 한 제일 단순한 동작*은 뭘까?

A common problem is to try and tackle a chunk of behavior that’s really big. If we think of password strength, there’s ideas of different rules like special characters, numbers, password length, etc… Of course it’s hard to think of a test that would cover all of that!
흔한 문제점은 너무 큰 덩어리에 매달리거나 해결하려고 하는 것이다. 비밀번호 강도를 생각해보면, 특수문자, 숫자, 길이, 등등... 다양한 규칙에 대해 떠올릴 것이다. 이 모든 것을 cover하는 테스트를 생각하는 건 당연히 어렵다.

So what’s the simplest possible step we can take to make this function be closer to the ultimate goal of validating a password?
그렇다면 비밀번호의 유효성 검사라는 궁극적인 목표에 도달하는 함수를 만들기 위해 시도할 수 있는 가장 단순한 절차는 무엇일까?

What would be the very first line (or two) of code you would write if you built this function without TDD?
TDD와 무관하게 함수를 작성한다면, 코드의 가장 첫(또는 두번째)줄에 당신은 뭐라고 쓸 것인가?

What is the smallest amount of code we can add to bring the function closer to working?
얼마나 추가하면 최소한의 코드로 제대로 동작하는 함수에 근접할 수 있을까?

The very simplest rule for password strength might be the empty password. That’s really easy – the output should always be false when the password is empty.
비밀번호 강도에 관해 가장 단순한 규칙은 빈 문자열이다. 이건 매우 쉽다 – 비밀번호가 비어있다면 출력값은 언제나 `false`여야 한다.

## Step 4: Implement test
## 과정 4: 테스트 구현

And just like that, we’ve arrived into implementing the test. I hope that was easier than you expected :)
우여곡절 끝에, 테스트 코드의 implementation까지 왔다. 생각보다 쉬웠기를 바란다 :)

Notice how all of the previous steps were actually similar to writing code *without* TDD?
앞선 모든 과정들이 TDD와 *상관없이* 코딩하는 것과 어떻게 유사한지 아는가?

The main difference is that instead of focusing on implementing the function, we’re focusing on how the function would be called, and what happens as a result. That is – we’re thinking about how the function behaves under some conditions.
주된 차이점은 함수 implementation 대신, 어떻게 호출되어야 하며, 어떤 결과가 발생하는 지에 집중하고 있다는 점이다. 즉 – 어떤 조건 하에서 함수가 어떻게 동작하는 지 생각하고 있다.

How the function *behaves* is what we want to test. Once you start testing behavior under some conditions (such as certain parameters, time of day, whatever), testing becomes a lot easier, because we can look at behavior from the outside. We don’t need to know the implementation if we’re just choosing behavior.
우리가 테스트하고 싶은 것은 함수의 *동작*방식이다. 어떤 조건 하에서 일단 시작하고나면(특정 매개변수, 시간대, 무엇이든) 테스팅이 무척 쉬워지는데, 바깥에서 동작을 살펴볼 수 있기 때문이다. 그저 동작을 선택하기만 하면 implementation에 대해서 알 필요가 없다.

We decided the function takes a password as its only parameter. We also decided it returns a boolean to indicate whether the password was strong or not.
우리는 비밀번호를 함수의 유일한 매개변수로 결정했다. 비밀번호가 강력하거나 그렇지 않음을 표시하기 위해서 `boolean`을 반환하기로 결정하기도 했다.

We also chose that for an empty password, the result should always be false – to indicate an empty password is weak.
또한 빈 문자열에 대해, 결과값은 항상 `false`라고 정했다 – 빈 문자열 비밀번호가 약함을 표시하기 위해서.

Let’s plug all of that into a test:
이제 모든 것을 테스트 코드에 연결해보자:

```js
describe('isPasswordStrong', function() {
  it('should give negative result for empty string', function() {
    var password = '';
 
    var result = isPasswordStrong(password);
 
    expect(result).to.be.false;
  });
});
```

Notice that we easily wrote that without knowing what the exact lines of code in the function are going to be. We decided that given an empty string as a parameter, the result should be false. One simple behavior, which easily translated into a test.
함수 코드의 한줄 한줄을 알지 못해도 쉽게 작성했다는 점에 주목하자. 우리는 빈 문자열이 매개변수로 전달되면, 결과값은 `false`라고 결정했다. 테스트로 옮길 수 있는 하나의 단순한 동작이다.

## Step 5: Implement code
## 과정 5: 코드 구현

Very self explanatory. We’ll just add the smallest amount of code that makes the test pass.
매우 자명하다. 우리는 단지 테스트를 통과할 수 있는 최소한의 코드만 추가할 것이다.

```js
function isPasswordStrong(password) {
  if(!password) {
    return false;
  }
}
```

If we were to continue developing the password strength function, all we do is just repeat this. We’ll go back to step 3, and choose the next tiny step to take. Step 4, add test. Step 5, implement. Repeat.
계속해서 비밀번호 강도 함수를 개발하고 싶다면, 단지 이것을 반복하면 된다. 우리는 과정 3으로 돌아가서, 취해야 할 작은 다음 단계를 선택할 것이다. 과정 4, 테스트. 과정 5, 구현. 반복.

If you keep advancing in small steps like this, TDD suddenly becomes a lot easier. Yes – you might end up with several tests for a fairly small amount of code, but that’s not a bad thing. TDD helps you in this way to reduce the amount of useless code you might otherwise write, because every line of code you add is verified by a test.
이런 작은 과정들로 계속해서 전진하다보면, 별안간 TDD가 매우 쉬워질 것이다. 그렇다 – 결국엔 아주 짧은 코드에 대한 몇번의 테스트로 끝날 수도 있지만, 그것도 나쁘지 않다. TDD는 당신이 작성할 법한 쓸데없는 코드의 양을 줄여줌으로써 도움이 된다, 왜냐하면 당신이 추가하는 코드 한줄 한줄이 테스트에 의해 검증되기 때문이다.

## A more elaborate example
## 더 복잡한 예

Can this system really work for more complex problems? It seem really simple doesn’t it.
이런 방식이 더욱 복잡한 문제에도 제대로 작동할까? 정말 단순해보이는데.

Spoiler alert: The answer is yes, it can!
스포 주의: 정답은, 그렇다!

Let’s take a look at a slightly more elaborate example, so you can get a better intuition on how the system would work for something which has more moving parts.
약간 더 복잡한 예를 살펴보면, 좀 더 동적인 부분이 포함될 때 TDD가 어떻게 효과적인지 보다 직관적으로 알 수 있을 것이다.

What would be suitably annoying to test?
테스트가 적당히 성가신 예는 뭐가 있을까?

How about a debounce function? The idea with a debounce function is that it ensures some other function doesn’t get called if it has already been called within a certain amount of time. This is convenient for example if you need to handle scroll events, as typically you would only want the event handling to trigger once the user stops scrolling.
디바운스 함수는 어떨까? 특정 시간범위 안에 이미 호출된 다른 어떤 함수도 호출되지 않는 것을 보장하는 것이 디바운스 함수의 개념이다. 예를 들어서 당신이 스크롤 이벤트를 조작해야 한다면, 특히 오직 사용자가 스크롤을 멈출 때마다 이벤트 핸들링이 발동되길 원한다면 매우 유용하다.

Since this involves time, it should provide a bit more challenge for the 5 step method I laid out.
시간과 연관됐기 때문에, 내가 제시한 5개 절차가 좀 더 도전적일 것이다.

Let’s start at step 1 again. What are the inputs and outputs of a debounce function?
1단계에서 다시 시작해보자. 디바운스 함수의 입력과 출력은 무엇일까?

Since the goal is to create a version of an existing function which doesn’t get called except some amount of time later, the first input should probably be a function. The second input can be the amount of time we want to debounce it.
존재하면서 어떤 시점까지는 호출되지 않는 함수의 버전을 생성하는 것이 목표이기 때문에, 첫 번째 입력값은 함수가 아마 함수일 것이다. 두 번째 입력값은 디바운스를 위한 지속시간이 된다.

As its output, the debounce function needs to return the delayed version of the original function, so that it can be called.
함수의 결과에 따라, 디바운스 함수는 원래 함수의 지연된 버전을 반환해야할 것이고, 따라서 그 함수가 호출될 것이다.

Into step 2: Function signature. We’ll pass the two inputs as parameters into the function, and it returns a new function. Simple.
2단계: 함수 시그니처. 우리는 두 입력값을 함수의 매개변수로 전달하고, 함수는 새 함수를 반환한다. 간단하다.

So we end up with something like this:
대략 이런 식일 것 같다:

```js
var delayedFunction = debounce(targetFunction, delayInMilliseconds);
```

Now the more interesting parts… with step 3, we need to choose a tiny part of the function to implement. There are many possible parts to debounce: There’s a delay, if we call the returned function multiple times, it shouldn’t get called.. unless we call it with a long enough break… etc.
좀 더 흥미로운 부분은... 3단계인데, 함수를 구현할 작은 부분을 선택해야한다. 디바운스가 가능한 부분이 많은데: 그중 하나는 지연으로, 만약 반환된 함수를 여러번 호출하면 호출되지 않아야 한다.. 충분한 지연시간과 함께 호출하지 않았다면... 등등 여러가지가 있다.

But let’s try to find the simplest thing to start with. If we call the delayed function returned by debounce, it should wait some amount of time, and then run the original function. I think this seems like a suitable place to start from.
하지만 일단 시작할만한 가장 단순한 것을 찾아보자. 디바운스에 의해 반환된 지연 함수를 호출한다면, 해당 함수는 일정 시간만큼 기다렸다가 원래 함수를 실행할 것이다. 내 생각에 이것이 시작하기 적당한 지점이다.

And we’re in step 4 already. What would the test for this look like?
그러면 이미 4단계제 접어든다. 이 경우 테스트 코드는 어떤 모습일까?

Same as before, let’s start by plugging what we chose into a test:
이전과 마찬가지로, 정한 것들을 테스트와 연결해보자:

```js
describe('debounce', function() {
  it('should call returned function after delay passes', function(done) {
    var delay = 5;
    var targetFn = function() {
      done();
    };
 
    var delayedFn = debounce(targetFn, delay);
 
    delayedFn();
  });
});
```

We know that we need the delay in milliseconds, so we’ll start by that. We also need the target function. Since we know the target function needs to be called after the delay, we can use this for a quick and easy way to verify the test passes by calling the `done` callback within the target function. No call to `done` – test fails.
우리는 밀리초 단위의 지연시간이 필요한 것을 알고있으므로, 거기서부터 시작할 것이다. 또한 대상 함수도 필요하다. 대상 함수는 지연시간 후에 호출되어야 하는 것을 알고있으므로 이를 활용, 대상 함수의 콜백으로 `done` 함수를 호출함으로써 쉽고 빠르게 테스트를 검증할 수 있다. `done` 함수 호출이 없으면 – 테스트는 실패한다.

Next, we call `debounce`. As we chose earlier, we pass in the two parameters and grab the output. Lastly, we call the output to test this behavior: After calling the delayed function and a delay, the target function should get called.
이어서, `debounce` 함수를 호출한다. 앞서 선택한 것처럼, 우리는 두 매개변수를 전달하고 결과값을 취한다. 마지막으로, 결과값을 호출하여 다음 동작을 테스트한다: 지연 함수의 호출과 지연시간 이후, 대상 함수가 호출되어야 한다.

We don’t need to know the exact implementation for this – we just plugged in the information from our previous steps directly into a test. The only thing we need to know is that in JavaScript, delays are asynchronous, so we need an asynchronous test. Yes, this is perhaps an implementation detail, but it follows naturally when you know how JavaScript works and is in no way specific to this particular function.
우리는 정확한 구현을 알 필요가 없다 – 단지 앞 단계들로부터 얻은 정보를 곧장 테스트에 연결하면 된다. 한가지 알아둘 것은 자바스크립트에서 지연은 비동기라는 것으로, 따라서 우리는 비동기 테스트가 필요하다. 맞다, 이건 세부 구현에 해당하지만, 당신이 자바스크립트의 작동방식을 안다면 자연스럽게 따라오는 것이며 결코 이런 특정 함수만 해당하지도 않는다.

We can go ahead to step 5 and implement the code now:
이제 곧장 5단계로 넘어가서 코드를 구현할 수 있다:

```js
function debounce(targetFn, delay) {
  return function() {
    targetFn();
  };
}
```

*Wait a minute! That isn’t delaying the function at all!*
*잠깐! 함수를 전혀 지연시키지 않잖아!*

Yes – we’re doing TDD! Arguably all we need to do is satisfy the test we wrote… and this code makes the test pass.
맞다 – 우리는 TDD를 실천 중이니까! 필요한 것은 틀림없이 작성한 테스트를 충족하는 것이고... 이 코드는 테스트를 통과한다.

One might call this a bit cheaty, after all we know this isn’t the correct behavior. One interpretation of TDD only calls for implementing just enough code to make the test pass, so let’s play along.
누군가는 이걸 꼼수라고 하겠지만, 어쨌든 우리 모두 이것이 올바른 동작이 아닌건 안다. TDD의 다른 말은 테스트를 통과할 정도로만 코드를 구현하는 것이므로, 그냥 넘어가자.

We’ll go back into step 3 and choose another tiny behavior to implement. A very important behavior would be that the function doesn’t get called too early, like our code does right now.
3단계로 돌아가서 구현할 또 다른 작은 동작을 선택할 것이다. 한가지 매우 중요한 동작은 함수가 너무 일찍 호출되지 않는 것으로, 당장 우리 코드의 동작과 비슷하다.

OK, that’s our second tiny step forwards. Step 4, implement test:
전진에 필요한 다음 단계가 마련됐다. 4단계, 테스트 코드를 구현한다:

```js
it('should not run debounced function too early', function() {
  var delay = 100;
  var targetFn = function() { };
 
  var delayedFn = debounce(targetFn, delay);
 
  delayedFn();
 
  // 그런데 이걸 어떻게 검증하지?
});
```

We’re going to need Sinon’s fake timers. We can use them to create a fake timer and then advance it forwards, and then ensure the delayed function isn’t called earlier than it’s supposed to.
'Sinon'의 가짜 타이머가 필요할 것 같다. Sinon.js(테스트 스텁의 한 종류입니다)를 사용하여 가짜 타이머를 생성하여 더 진행할 수 있으며, 지연 함수가 예상보다 일찍 호출되진 않았는지 확인할 수 있다.

```js
it('should not run debounced function too early', function() {
  var clock = sinon.useFakeTimers();
 
  var delay = 100;
  var targetFn = sinon.spy();
 
  var delayedFn = debounce(targetFn, delay);
 
  delayedFn();
  clock.tick(delay - 1);
 
  clock.restore();
  sinon.assert.notCalled(targetFn);  
});
```

First, we enable Sinon’s fake timers. Notice I changed the target function into a Sinon spy. This allows us to later easily verify if the function was called or not.
먼저, Sinon의 가짜 타이머를 활성화한다. 대상 함수를 Sinon spy로 변경한 것을 알아두도록 하자. 이렇게 하면 나중에 함수 호출 여부를 쉽게 검증할 수 있다.

After we call `delayedFn`, we use `clock.tick` to advance the time. However, we only advance it 1 millisecond less than is required for delay. This way, as we call `sinon.assert.notCalled`, we can ensure the target function didn’t get triggered too early.
`delayFn` 함수를 호출한 뒤, 시간 경과를 위해 `clock.tick`을 사용한다. 하지만, 필요한 지연시간보다 딱 1 밀리초만 부족하게 경과시켰다. `sinon.assert.nonCalled` 함수를 호출함으로써, 대상 함수가 너무 일찍 작동된 것은 아닌지 확인할 수 있다.

If you want to learn more about Sinon’s functionality or fake timers, you should [grab my free Sinon.js in the Real-World guide](http://codeutopia.net/go/sinon-pdf-download-page/), as it covers this in much more detail.
Sinon의 기능성과 가짜 타이머에 대해서 더 알아보고 싶다면, [grab my free Sinon.js in the Real-World guide](http://codeutopia.net/go/sinon-pdf-download-page/)에서 훨씬 자세한 내용을 다루고 있으니 참고하자.

## Conclusion
## 결론

As you can see from the examples, we can apply the same five steps to all sorts of functions.
예제로 살펴본 것처럼, 우리는 모든 종류의 함수에 5단계 과정을 적용할 수 있다.

If you’re looking for some practice, you could take either of the two functions we started implementing here, and seeing if you can apply the 5 steps to make those functions fully functional.
연습이 좀 필요하다면, 여기서 구현하기 시작한 두 함수 중 하나를 골라서, 완전히 동작할 때까지 5단계의 과정을 적용하는 것을 연습해보라.

Test-Driven Development is not difficult once you get the hang of the basics. The challenge is that it requires you to flip your thinking around: Without TDD, you think directly of how you implement something. But with TDD, you think of how you want something to behave.
테스트-주도 개발은 한번 기본을 터득하고나면 어렵지 않다. challenge는 사고방식을 전환하는 것이다: TDD 없이는, 무언가를 어떻게 구현할 지 직접적으로 생각한다. 하지만 TDD는, 무엇이 어떻게 동작할 지 생각하게 한다.

1. What are the inputs to our function and what is the output (behavior) we want from calling the function?
2. Decide how calling the function from code works
3. Choose the smallest possible piece of behavior for some inputs that you can think of
4. Write a test which uses those inputs to call the function, and verify the behavior
5. Implement enough code to make the test pass

1. 함수 호출 시 어떤 입력과 출력(동작)이 필요한가?
2. 코드 실행 시 함수가 어떻게 호출되어야 하는지 결정하기
3. 당신이 생각하는 입력에 대한 가장 작은 동작을 선택하기
4. 입력값으로 함수를 호출하는 테스트 코드를 작성하고, 동작을 검증
5. 테스트를 충분히 통과하는 코드를 구현

If we follow these kinds of simple steps, writing tests up front becomes much easier. As you continue working on the code, you can just repeat between step 3 to 5.
이런 방식의 간단한 절차를 따르면, 테스트 코드를 미리 작성하는 것이 무척 쉬워진다. 계속해서 코드를 작성하려면, 단지 3단계에서 5단계를 반복하면 된다.

Remember – if you implement some tests and code only to later find out it has to work differently, that’s fine! Go ahead and redo it – We don’t need perfection on the first try, seeking it only gets you stuck. This isn’t just a TDD thing either: you’ll probably need to redo and refactor parts of your code anyway, TDD simply makes it safer because you have tests that verify your code doesn’t break as a result of changing it.
기억하자 – 당신이 어떤 테스트와 코드를 구현하고나서 다르게 동작해야만 하는 걸 깨닫더라도, 괜찮다! 계속해서 다시하면 된다 – 우리는 첫 술에 배부를 필요가 없으며, 그런 걸 추구해도 가로막힐 뿐이다. 이것은 TDD 만의 전유물이 아니다: 어쨌거나 당신은 코드의 일부분을 다시 작성하고 리팩토링해야 할 것이고, TDD는 변경된 코드가 break 하지 않는 지 검증하는 테스트로서 간단히 이걸 쉽게 한다.