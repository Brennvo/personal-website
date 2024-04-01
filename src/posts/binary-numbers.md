---
date: 2024-03-31
layout: layouts/blog-post.njk
tags: post
title: Binary Numbers
permalink: /blog/binary-numbers/index.html
---

I've been reading [Code: The Hidden Language of Computer Hardware and Software, 2nd edition, by Charles Petzold](https://codehiddenlanguage.com/Chapter00/), and have really come to admire Petzold's style of writing. I especially like the way he introduces the concept of binary numbers with cartoon characters. Binary numbers, unlike the numbers we use everyday, consist of _only_ 1s and 0s. For example, the number "30" is written as "11110" in binary. At first, this concept can be difficult to grasp, but Petzold explains binary numbers in a way that makes them feel a lot less intimidating, and instead, a lot more practical. In this post, I'd like to reinforce some of his explanations with illustrations and expand a bit more on the foundations he builds for the readers of his book.

First, we'll start with the theory behind number systems with an analogy to the way we communicate colors. Then, we'll relearn how to count on our fingers so that we can count along with a snowman. Finally, we'll end the post by counting with a penguin, which will leave us with a much better understanding of how to interpret binary numbers.

_If you're curious, all of sketches you'll see in this post were done in <a href="https://excalidraw.com/">Excalidraw</a>._

## Color systems

What do we mean by "blue"? Almost certainly, you're thinking of the color we associate with the sky:

<img
  class="image"
  width="80%"
  alt="A shade of blue."
  src="../../assets/images/light/posts/binary-numbers/colors/blue.svg"
/>

Likewise, when you read "green", you likely envision the color of grass:

<img
  class="image"
  width="80%"
  alt="A shade of green."
  src="../../assets/images/light/posts/binary-numbers/colors/green.svg"
/>

In summary, the labels "blue" and "green" are a direct mapping to a particular color hue (or shade.) However, in Spanish, the identifiers for these same color hues are written as "azul" and "verde" respectively. In Lithuanian, these two color hues are identified as "mėlyna" and "žalias".

Regardless of the language being used, the identifiers refer to the same exact color hue. That is, the identifiers "blue", "azul", and "mėlyna" all map to the shade of the sky, and the identifiers "green", "verde", and "žalias" all map to the shade of grass.

However, what if by a really bad coincidence, there was some language other than English that identified the color of grass as some other English word? Even worse, what if that word was the name of _another_ English color?

For example, what if penguins called green (the color we associate with grass) gold instead?

<img
  class="image"
  alt="A penguin cartoon acknowledging a shade of green as gold inside a thought bubble."
  src="../../assets/images/light/posts/binary-numbers/penguin/sees-green.svg"
/>

That looks like a typo, doesn't it? The penguin is looking at the shade of grass, but it's identifying it with a word that we associate with the color of an expensive piece of jewelry. I can assure you that in the context of this blog post (I'm not going to make a claim that I know biology), this penguin is indeed seeing the same shade of color as you. So, what's going on? Actually, the penguin is just using a different _language_, i.e., **not** English. This is like how a Spanish speaker would have called this same shade "verde", and a Lithuanian speaker would have called it "žalias".

The difference between the penguin and Spanish/Lithuanian speakers, though, is that the penguin just so happens to be using a combination of characters that map to a word in the English dictionary. What makes it worse is that it is already used for _another_ shade of color in English. This makes it very difficult for us English speakers to know at first glance that the penguin is still referring to the shade associated with grass. In fact, it would be _less_ confusing had the penguin used a word we've never heard of before, e.g., "wigglewump". That would make it much more obvious that the penguin is just speaking a different language.

The reality is, both penguins and us English speakers have grown accustomed to the vocabulary of colors within our respective languages. For us, it's in our nature to associate the shade of grass with the word "green" and nothing else.

Petzold puts this nicely in the context of number systems, so I've edited the phrase ever so slightly to account for our current example with colors:

> _"Nearly a lifetime of familiarity with [English color identifiers] has conditioned us to expect that certain [color identifiers] correspond to specific [color shades]"_

<img
class="image"
alt="A penguin cartoon saying &quot;I like gold.&quot; to a stick figure cartoon. The stick figure cartoon responds by asking the penguin if it meant &quot;green&quot; instead."
src="../../assets/images/light/posts/binary-numbers/comics/gold-green-conversation.svg"
/>

## Number systems

Similar to the words we use to identify shades of colors, digits (e.g. "1", "2", "3", etc.) identify _quantities_. For example, when you read "5 coffee beans", you're likely visualizing a quantity of, well, five coffee beans. You're associating the literal character strokes of "5" with an exact quantity.

<img
  class="image"
  alt="5 coffee beans lined up in a row."
  width="80%"
  src="../../assets/images/light/posts/binary-numbers/coffee-beans/5.svg"
/>

This is similar to how the word "blue" consists of characters that we, as English speakers, associate with the color of the sky. But don't forget about the penguins! They need to represent quantities, too. Let's show a penguin the same five coffee beans and see what it has to say:

<img
  class="image"
  alt="A penguin cartoon looking at five coffee beans and identifying the quantity as 101."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-101-coffee-beans.svg"
/>

Hmm... 101? Is that a mistake? Let's try again, but with ten coffee beans:

<img
  class="image"
  alt="A penguin cartoon looking at ten coffee beans and identifying the quantity as 1010."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-1010-coffee-beans.svg"
/>

Alright; something strange is going on. Is the penguin actually seeing 1,000 more coffee beans than we are? Actually, no, it isn't. Instead, the penguin is merely expressing the _quantity_ as a different sequence of digits. The confusion we're experiencing here is similar to the confusion we had when we showed the penguin the shade of grass (that we call "green") and it instead identified it as "gold". Because our language has its own classification of what "gold" is (e.g. the color of a piece of jewelry), we immediately questioned the penguin's color recognition capabilities. Similarly, because we have our own classification for the quantities "101" and "1010", we are now questioning the penguin's counting abilities.

So, instead of merely accepting this penguin's unfamiliar number system (like we did for colors), let's actually try to understand how it's arriving at these sequence of digits and why it has crossover with ours. That way, if we ever need to do business with a penguin, we won't panic when we see "101" dollars during the transaction, since in our terms, it's really just five.

## Long, but not large, numbers

First, it's important to reiterate that although the penguin is using a different sequence of digits to represent five coffee beans, it's still referring to the same _quantity_ of coffee beans as we are when we write "5". One of my favorite quotes from Petzold regarding this idea is as follows (keep in mind I replaced some words in brackets since Petzold doesn't use penguins in the book):

> <i>"These numbers might look large, but they're really not. It's more accurate to say that [penguin numbers] get long very quickly rather than large."</i>

For example we express a quantity of five coffee beans as "5":

<img
  alt="5 coffee beans lined up in a row with a label of &quot;5&quot; to represent the quantity of coffee beans."
  class="image"
  src="../../assets/images/light/posts/binary-numbers/coffee-beans/5-label.svg"
/>

Whereas the penguin identifies this same quantity as "101":

<img
  alt="5 coffee beans lined up in a row with a label of &quot;101&quot; to represent the quantity of coffee beans."
  class="image"
  src="../../assets/images/light/posts/binary-numbers/coffee-beans/101-label.svg"
/>

Both images contain the same _amount_ of coffee beans, but we (a human) expressed it as one character, and the penguin expressed it as three. This is exactly what Petzold meant by saying that the numbers get long instead of large.

But _why_? Why are all of the penguin's numbers longer, and why do they only use 1s and 0s? Well, as Petzold brilliantly points out, it comes down to anatomy. To illustrate how anatomy plays a role in the way we express numbers, we're going to go revisit how to count with our fingers.

## Counting with fingers

Believe it or not, counting with fingers explains everything we need to know about the relationship between anatomy and expressing quantities. We're going to count alongside three different doodle characters to see how this all comes together.

### Counting with human anatomy

When we (humans) count with our fingers, we raise each finger up one at a time until we've exhausted each finger on both of our hands. When we're at our very last finger, we've arrived at 10:

<img
  class="image"
  alt="A stick figure cartoon with ten fingers. Each finger is circled and labeled from 1-10 to showcase how each finger corresponds to a human number."
  src="../../assets/images/light/posts/binary-numbers/stick-figure/counting-10.svg"
/>

As humans, we use ten unique **single-digit** characters to denote quantities: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. However, it's worth noting that there isn't a standalone digit to represent the quantity "ten". Instead, we express this quantity as a combination of "1" and "0". Interestingly, this quantity coincides with the number of fingers we possess! As a result, we can can conceptualize the two digits "10" as a way of expressing that we've exhausted all of our counting fingers. This idea will become very important as we move on throughout the post.

Now, if we wanted to continue counting with these same fingers (and not use our neighbors), we'd need to keep track of how many times we've exhausted our ten counting fingers throughout our counting journey. That way, we could add them back on at the end. For example, the number 17 can be verbalized as "the 10 counting fingers I originally ran out of, plus the 7 counting fingers I'm looking at now."

<img
  class="image"
  alt="A stick figure cartoon character with ten fingers, with its first seven fingers circled and labeled with their corresponding sequence number. In a thought bubble, the stick figure thinks to itself &quot;7...but I've run out of counting fingers once already. Therefore, 10 + 7 = 17&quot;"
  src="../../assets/images/light/posts/binary-numbers/stick-figure/counting-17.svg"
/>

So, what happens when we've run out of counting fingers _again_? Nothing different than what we just did with the number 17; we just add the original 10 counting fingers we ran out to the 10 counting fingers we currently ran out of:

<img
  class="image"
  alt="A stick figure cartoon character its ten fingers circled and labeled with their corresponding sequence number. In a thought bubble, the stick figure thinks to itself &quot;10...but I've run out of counting fingers once already. Therefore, 10 + 10 = 20&quot;"
  src="../../assets/images/light/posts/binary-numbers/stick-figure/counting-20.svg"
/>

And if we run out of counting fingers yet again:

<img
  class="image"
  alt="A stick figure cartoon character its ten fingers circled and labeled with their corresponding sequence number. In a thought bubble, the stick figure thinks to itself &quot;10...but I've run out of counting fingers twice already. Therefore, 10 + 10 + 10 = 30&quot;"
  src="../../assets/images/light/posts/binary-numbers/stick-figure/counting-30.svg"
/>

Another way of expressing the idea of exhausting our counting fingers three times in total would be with multiplication. Instead of having used three additions (10&nbsp;+&nbsp;10&nbsp;+&nbsp;10), we could have used a single multiplication (3&nbsp;x&nbsp;10). This way of expressing the same quantity might make the illustration easier for you to grasp.

Before we close our counting journey with the stick figure doodle, it's important to reiterate that despite having counted up to 30, we've still only used ten unique single-digit characters (0 through 9.) Whenever we ran out of counting fingers, we instead "reset" our counting of 0 through 9 to a different position. More formally, we shifted our counting to the ten's place. If we continued counting, we'd eventually begin incrementing in the hundred's place, thousand's place, etc.

Lastly, if you're wondering why you just read about finger counting and [place values](https://www.splashlearn.com/math-vocabulary/place-value/place-value), it will become more obvious later in the post. For now, we need to revisit this elementary topic so that we can build our way up to understanding how the penguin was counting the coffee beans from earlier.

### Counting with snowman anatomy

In <i>Code: The Hidden Language of Computer Hardware and Software</i>, Petzold uses an eight fingered cartoon to build our way up to interpreting binary numbers. Similarly, we're going to count along with a six fingered snowman so that we can work our way up to counting along with the penguin, which is our ultimate goal.

<img
  class="image"
  alt="A snowman cartoon with six fingers."
  src="../../assets/images/light/posts/binary-numbers/snowman/snowman.svg"
/>

When the snowman starts to count, it'll be exactly what we expect:

<img
  class="image"
  alt="A snowman cartoon looking at one coffee bean and identifying it as &quot;1&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-1-coffee-bean.svg"
/>

<img
  class="image"
  alt="A snowman cartoon looking at two coffee beans and identifying it as &quot;2&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-2-coffee-beans.svg"
/>

And skipping to 5:

<img
  class="image"
  alt="A snowman cartoon looking at five coffee beans and identifying it as &quot;5&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-5-coffee-beans.svg"
/>

But, before we move on, we need to remind ourselves of something from the previous section:

> _...we can can conceptualize the two digits "10" as a way of expressing that we've exhausted all of our counting fingers._

Up until now, you've probably been reading the two digits "10" as "ten", but from here on out, I strongly suggest reading it as "1 _pause_ 0". You'll confuse yourself a lot less if you do.

So, just like how we (humans) use 10 (1 _pause_ 0) once we've counted to our last finger, the snowman will _also_ use 10 (1 _pause_ 0) when its counted to their last finger!

<img
  class="image"
  alt="A snowman cartoon looking at six coffee beans and identifying it as &quot;10&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-10-coffee-beans.svg"
/>

If this is difficult to wrap your head around, that's okay; this is unfamiliar territory.

First, remember that these two digits (10) are a mere representation of some arbitrary **quantity**. That quantity could theoretically be _anything_, for example, three, eight, ten, or even sixteen." In the case of our snowman, that quantity is six. However, as we've seen so far, we can determine which _quantity_ 10 is referring to by inspecting the number of fingers on the species who wrote 10 to begin with. For instance, when a human writes 10, they're referring to the quantity that comes after nine, because humans have ten fingers. But, in the case of our snowman, 10 refers to the quantity that comes after five because the snowman has six fingers.

Second, this is why I suggested reading 10 as "1 _pause_ 0". When you read 10 instinctively as "ten", you're always going to think of the quantity that comes after nine. But reading it as a sequence of a "1" followed by a "0" will remind you that this is a representation of an arbitrary quantity that is dependent on the species who wrote the number down.

For now, let's continue counting along with the snowman. Just like how the stick figure doodle need to keep track of how many times it exhausted its counting fingers during its counting journey, the snowman will need to do the same.

<img
  class="image"
  alt="A snowman cartoon looking at seven coffee beans and identifying it as &quot;11&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-11-coffee-beans.svg"
/>

<img
  class="image"
  alt="A snowman cartoon looking at eight coffee beans and identifying it as &quot;12&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-12-coffee-beans.svg"
/>

Just like the stick figure doodle, the snowman also remembered to add 10 (1 _pause_ 0) when counting on their fingers the second time around. Now, if the snowman continues counting until it's exhausted the rest of their fingers, they'll have run out of fingers twice, which the snowman would express as 20 (10&nbsp;+&nbsp;10 or 2&nbsp;x&nbsp;10).

<img
  class="image"
  alt="A snowman cartoon looking at twelve coffee beans and identifying it as &quot;20&quot;."
  src="../../assets/images/light/posts/binary-numbers/snowman/counting-20-coffee-beans.svg"
/>

Just like how we've been thinking of the digits "10" as a way of expressing we've counted to our very last finger, we can think of 20 as a way to express that a species (whether it be a stick figure or snowman) has counted to their very last finger not once, but twice. This idea will allow us to convert the snowman's "20" into digits that we (humans) can interpret by multiplying the number of fingers the snowman has on both hands (in human digits) by 2, i.e., 6&nbsp;x&nbsp;2&nbsp;=&nbsp;12. So, be careful: if a snowman asks you to buy 20 doughnuts, they only want you to buy a dozen! Don't buy eight more doughnuts than you need.

Next, let's do something a bit more difficult to conceptualize: what comes after the **snowman's** version of 55? If we wanted, we could draw it out like we've been doing so far. However, I might suggest a more systematic approach, considering what we know about the snowman's six-finger anatomy and the discussion we had earlier about place values. Like we learned in elementary school, we can do our addition in columns, i.e., within each place value.

For example, when we (humans) add 1 to 99, we first add the "1" and "9" in the ones column, which results in a carry over value to the tens column. Next, we add the numbers in the tens column, which results in a carry over value to the hundreds column. Finally, we add the numbers in the hundreds column and arrive at a final answer of 100.

<img
  class="image"
  alt="Adding 1 + 99 by performing additions in the ones, tens, and hundreds columns with carry over values for a final sum of 100."
  src="../../assets/images/light/posts/binary-numbers/comics/99+1.svg"
/>

So, when a snowman adds 1 to 55, it also adds each digit in columns. Keep in mind, though, that the snowman only has six fingers. When it goes from its fifth finger to its sixth, it expresses this quantity as 10 (1 _pause_ 0).

<img
  class="image"
  alt="Adding 1 + 55 (as if we were a six fingered snowman) by performing column additions with carry over values for a final sum of 100."
  src="../../assets/images/light/posts/binary-numbers/comics/55+1.svg"
/>

Wow! That looks strange, huh? Indeed it does, but remember that this representation of 100 by the snowman is not the same quantity that we (humans) refer to when we write down 100. This goes back to the quote from Petzold:

> <i>"These numbers might look large, but they're really not. It's more accurate to say that [penguin numbers] get long very quickly rather than large."</i>

And now you might be asking yourself, how would the snowman add 1 to 99? Well, actually, the snowman has no idea what "9" even is. In fact, they don't know anything about 6, 7, 8, or 9 because their anatomy only requires them to know 0, 1, 2, 3, 4, and 5. So, for a snowman to add 1 to 99, we'd first have to convert 99 into digits they're able to comprehend.

This is just like how we (humans) don't know of any **single-digits** that represent quantities greater than or equal to ten. In comparison, a 12-armed starfish _does_ have an anatomy that would benefit from single-digit characters to represent quantities ten and eleven, because they run out of counting fingers at quantity twelve. For instance, let's say that a 12-armed starfish identified "ten" as the single character "<span class="text--inverted-bg">💲</span>", eleven as "<span class="text--inverted-bg">➰</span>".

<img
  class="image"
  alt="A starfish cartoon with its twelve arms circled. The first nine arms are labeled with the corresponding sequence number, whereas the tenth, eleventh, and twelfth are labeled with a single emoji."
  src="../../assets/images/light/posts/binary-numbers/starfish/starfish.svg"
/>

If a starfish asked us to add "1 + <span class="text--inverted-bg">💲</span>", we wouldn't know which quantity the second operand (i.e. <span class="text--inverted-bg">💲</span>) is referring to, which means we couldn't respond with an answer. Even more confusing would be if the starfish asked us to add "<span class="text--inverted-bg">💲</span> + <span class="text--inverted-bg">➰</span>". In order to do either of these additions, we'd need the symbols translated to human equivalent digits, i.e., 10 and 11 (notice how each consists of two digits.) Now, we can emphasize with the snowman when we asked it to add 1 to 99.

### Counting with penguin anatomy

Now, we are in a much better position to understand how the penguin doodle was counting since it uses the same technique as the stick figure and snowman. The difference for the penguin, though, is that it only has two fingers to count with (it might prefer if we called their "fingers" flippers instead.) Compared to the ten-fingered stick figure or the six-fingered snowman, this is quite a difference; the penguin will need to use "10" much earlier in their counting journey.

When we counted coffee beans with the other doodles, we skipped some along the way. For the penguin, though, we're not going to skip any.

<img
  class="image"
  alt="A penguin cartoon looking at one coffee bean and identifying it as &quot;1&quot;."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-1-coffee-beans.svg"
/>

So far, the penguin and us (humans) agree on the representation of the very first quantity. However, for the next quantity, we're _already_ at the penguins last counting finger, which like previously mentioned, means the penguin already needs to use 10 (1 _pause_ 0):

> _> *...we can conceptualize the two digits "10" as a way of expressing that we've exhausted all of our counting fingers.*_

<img
  class="image"
  alt="A penguin cartoon looking at two coffee beans and identifying it as &quot;10&quot;."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-10-coffee-beans.svg"
/>

Wow! Now that looks bizarre, doesn't it? I.e., two coffee beans being represented as "10". Now is a really good time to remind yourself that you should read this as "1 _pause_ 0" instead of "ten.". Next, the penguin will count the third coffee bean:

<img
  class="image"
  alt="A penguin cartoon looking at three coffee beans and identifying it as &quot;11&quot;."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-11-coffee-beans.svg"
/>

And now, the fourth:

<img
  class="image"
  alt="A penguin cartoon looking at four coffee beans and identifying it as &quot;100&quot;."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-100-coffee-beans.svg"
/>

If 10&nbsp;+&nbsp;10&nbsp;=&nbsp;100 is throwing you off, think back to how we went about adding 55 + 1 with the snowman. Here, we'll illustrate it the same way using the column approach:

<img
  class="image"
  alt="Adding 10 + 10 (as if we were a two fingered penguin) by performing column additions with carry over values for a final sum of 100."
  src="../../assets/images/light/posts/binary-numbers/comics/10+10.svg"
/>

If we count the next coffee bean, we'll add "1" to "100":

<img
  class="image"
  alt="A penguin cartoon looking at five coffee beans and identifying it as &quot;101&quot;."
  src="../../assets/images/light/posts/binary-numbers/penguin/counting-101-coffee-beans-alt.svg"
/>

And alas, we now have an explanation for the penguin's representation of five coffee beans as 101. If you keep on counting to a tenth coffee bean, you'll eventually find yourself at "1010", which would then explain the penguin's representation of ten coffee beans.

## Wrapping up

When it's all said and done, binary numbers are just another means for expressing quantities, just like how "green" and "verde" are a means for expressing the shade of grass. As humans with ten fingers, we prefer a decimal based number system, whereas a penguin with only two flippers prefers a binary number system. If we are talking to somebody (like a penguin) who uses a different number system than us, then we can leverage their anatomy to figure out which quantity (in human terms) they are referring to. Hopefully, moving forward, you can think back to some of the heuristics in this post whenever you encounter a bunch of 1s and 0s, and more importantly, be able to make a business transaction with a penguin and know you're not getting ripped off.

If you've made it this far, I strongly encourage you to consider reading [Code: The Hidden Language of Computer Hardware and Software, 2nd edition, by Charles Petzold](https://codehiddenlanguage.com/Chapter00/). What I've written in this post is just an _extremely_ small sliver of knowledge that Petzold articulates so wonderfully in his book. Seriously; check it out!
