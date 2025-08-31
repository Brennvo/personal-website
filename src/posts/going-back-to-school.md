---
date: 2023-08-16
layout: layouts/blog-post.njk
tags: post
title: Going Back to School
permalink: /blog/going-back-to-school/index.html
---

In the Fall of 2022, I decided I wanted to begin formally studying computer science alongside my full-time job. Although I already have a bachelor's degree in information technology, which was fulfilling on its own accord (namely due to its computer programming, networking, and database curriculum), I've been wanting to explore the fundamental theories and principles of computation.

Although working towards a degree isn't necessary to learn computer science, I knew I'd appreciate structured courses in a classroom setting. Not only would it help me keep pace, but it would put me in an environment with other people who are also eager to learn.

## Enrolling in Class

There are many ways to pursue a continued education, but I decided to enroll at [Austin Community College](https://www.austincc.edu/) for the convenience, course offerings, and price. The only hurdle during enrollment was retrieving my high school Advanced Placement (AP) exam scores dating back to 2014, which meant they were no longer available online. As a result, I had to send a fax (yes; a fax) to [College Board](https://www.collegeboard.org/) to request that my archived exams scores be sent to Austin Community College, which took College Board a little over a month to acknowledge. Once that was complete, I was able to begin registering for classes.

From my research, most of the upper-level math courses in computer science curriculum (e.g., linear algebra) list Calculus III as a prerequisite, which meant I would've needed to start out in Calculus II since my most recent math credit dates back to Calculus I. However, because it's been a while since I've even taken a class, I figured it was a good idea to retake Calculus I a second time. Leading up to my first class, I was also working through a few chapters of [Engineering Mathematics by Kenneth Stroud](https://www.amazon.com/gp/product/0831134704/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) to freshen myself up.

Although I was eager to enroll in another class, particularly something in the computer science department, I decided to limit myself to just one so that I could gauge how difficult it was to participate in a class after working hours. If all went well, then I could consider enrolling in more than just one course the following semester.

## Starting Class

I joined my first Calculus I lecture (virtually) on a Thursday evening at 6:00 P.M. However, within just 30 minutes of the class, I realized I was much more out of touch with my math skills than I had initially thought. Although the concepts being introduced to the class were familiar, they required prerequisite knowledge that I wasn't fully up to speed with. Instead of trying to catch myself up the entire semester while simultaneously going through the Calculus I curriculum, I figured I should reconsider which math course I should actually be enrolled in.

Once my first Calculus I session on that Thursday night was over, I browsed the [Austin Community College Math Department's Prerequisite Reviews](https://sites.google.com/a/austincc.edu/math-students/placement/prereq-rev?authuser=0) to accurately gauge where my math skills were currently at, which is what I should have done from the start. In a humbling fashion, I decided to opt-out of Calculus I and enroll in a math course two levels below where I originally enrolled; College Algebra.

Although this decision meant it would take me longer to enroll in any upper-level computer science courses, I wanted to ensure I had a strong foundation going into the more advanced math courses.

## Reading My Textbook

Because of my delayed enrollment into College Algebra (due to my own displacement in Calculus I), I was a week behind the class from the very start. This required me to immediately dive into the textbook to catch myself up, which contrasts with how I was taught math in grade school.

During grade school, I didn't read my math textbooks directly. Instead, teachers often provided notes with fill-in-the-blanks to accompany their lectures, which then served as my point of reference when completing homework and preparing for exams. Upon some reflection, I realized this never exposed me to the mathematical language, which is likely why math terminology felt intimidating at that age.

However, by reading the textbook this time around, I was able to conceptualize abstract, algebraic concepts that were building from one chapter to the next. This allowed me to understand the "whys" to algebra and not just the "hows". Typically, once I understood the underlying "why" to some concept, the steps for "how" to solve it (e.g., a formula) came naturally. This reduced the amount of formulas and rules I needed to memorize, which was helpful given that I was slightly constrained on the amount of time I could study.

This experience reminded me a lot of when I was first introduced to object-oriented programming in college. Memorizing the Java programming syntax (the "how") wasn't necessarily the difficult part, but grasping the object oriented programming paradigm (the "why") was. Once I started to wrap my head around the nature of object oriented programming and what problems it was trying to solve, the Java syntax itself started to make literal sense, which made remembering the syntax more intuitive.

### Memorizing vs. Understanding

I'd like to demonstrate the idea of "why" versus "how" with a concept introduced in my algebra class: absolute value inequalities. Given the following inequality, which values of $ x $ will satisfy this condition?

$$
|x - 5| < 10
$$

If we were to jump straight to "how" we should solve an absolute value inequality in my textbook, we'd find the following two rules relating to less than and greater than inequalities:

$$
\\begin{array}{l}
\text{1.} \hspace{4pt} |u| < k \hspace{4pt} \text{is equivalent to} \hspace{2pt} -k < u < k  \\\\
\text{2.} \hspace{4pt} |u| > k \hspace{4pt} \text{is equivalent to} \hspace{2pt} u < -k \hspace{4pt} \text{or}\hspace{4pt} u > k.  \\\\
\\end{array}
$$

Applying this to our problem, we'd use the first rule since it is a less than inequality. Once we "plug-in" our values (i.e., $ x - 5 $ for $ u $ and $ 10 $ for $ k $) we have:

$$
\\small
\\begin{array}{c}
|x - 5| < 10 \hspace{4pt} \text{is equivalent to} \hspace{2pt} -10 < x - 5 <10 \\\\
\\end{array}
$$

Finally, we'll add five to both sides to solve for $ x $, which gives us our final answer:

$$
\\begin{array}{rcrcr}
-10 & < & x - 5 & < & 10 \\\\
\\textit{+5} && \\textit{+5} && \\textit{+5} \\\\
\\end{array}
$$

$$
\\begin{array}{rcrcr}
-5 & < & x & < & 15 \\\\
\\end{array}
$$

Although this is correct and would earn us full credit, the process we used to arrive at this answer does not explain "why" this makes logical sense other than that we recognized and applied a pattern. To explain "why", we'll first need to grasp what the problem is actually asking of us.

#### Understanding the Problem

As a reminder, our inequality stated:

$$
|x - 5| < 10
$$

Phrased another way, this inequality is asking us which set of numbers are less than 10 after we subtract 5 from each and take its absolute value.

For example, 12 would be included in our solution because $ | 12 - 5 | = 7 $, and $ 7 < 10 $. Although we could perform this test for every number, it would be inefficient, so instead, let's use algebra.

First, we need to understand how the absolute value affects our approach to this problem. To conceptualize an absolute value, we can think of it as the distance a number is away from 0, regardless of its position. For example, even though -5 and 5 are positionally to the left and right of 0 on the number line respectively, they both share the same absolute since it takes 5 "steps" to get back to 0 from each number.

If we use a dartboard as an analogy, it would be like stating how many inches our shot is away from the bullseye. Whether our shot is above, below, to the left, or to the right of the bullseye, it doesn't matter; we are only interested in its distance from the center. For example, if our opponent's shot landed 10-inches to the left of the bullseye, and ours landed 10-inches to the right (I never said we were good at darts), we'd **both** verbalize that we're 10-inches away from the bullseye. Therefore, we share the same absolute value as our opponent with respect to the bullseye despite our opponent's dart landing to the left and our's landing to the right.

<img
  alt="A dartboard with two arrows; one 10-inches to the left of the bullseye, and the other 10-inches to the right of the bullseye."
  src="../../assets/images/posts/going-back-to-school/dart-board.svg"
/>

What you might have noticed is that this is essentially what our inequality is asking us! If you recall, our inequality was:

$$
|x - 5| < 10
$$

If we were to visualize this inequality using the dartboard analogy, it would be similar to drawing a circle with a 10-inch radius centered at the bullseye. In essence, our inequality is asking us where we should aim so that our dart lands somewhere inside that 10-inch circle. Regardless of if the dart lands above, below, or to either side of the bullseye, as long as it is _somewhere_ within 10-inches of the bullseye, we have satisfied the condition.

<img
  alt="A dartboard with a 10-inch radius circle drawn from the center bullseye."
  src="../../assets/images/posts/going-back-to-school/dart-board-with-circle.svg"
/>

Now, taking this analogy and applying it to the number line looks as follows:

<img
  class="full-width"
  alt="A number line with two endpoints at -10 and 10, non-inclusive, forming a line to represent an inequality less than 10."
  src="../../assets/images/posts/going-back-to-school/number-line.svg"
/>

The only difference between this number line and the dartboard is that the number line is one dimensional, whereas the dartboard is two dimensional. That is, darts can land above, below, to the left, or to the right of the bullseye, but points on a number line can only be plotted to the left or right of 0.

What we can conclude from the number line is that any number greater than -10 and less than 10 would satisfy our inequality's condition. We can represent the set of numbers greater than -10 and less than 10 as:

$$
-10 < x < 10
$$

And just like that, we've naturally arrived at the textbook's first rule for solving absolute value inequalities, but we didn't have to memorize anything!

$$ |u| < k \hspace{4pt} \text{is equivalent to} \hspace{2pt} -k < u < k $$

Now, we are in a great position to arrive at a final answer, but if you remember what the original inequality was asking us, we still haven't accounted for subtracting 5 from our set of answers.

<figure>
    $$ |x - 5| < 10 $$
  <figcaption>Our original inequality</figcaption>
</figure>

Going back to our dartboard analogy, this is like having to account for a 5 mile per hour westbound wind as we release our dart. We'll need to aim slightly more to the right than we otherwise would since the wind will inevitably push it to the left.

Algebraically, this can be represented by taking the answer we've derived so far (i.e., $ 10 < x < 10 $) and substituting $ x $ with $ x - 5 $. Then, we'll need to add 5 to both sides of the inequality:

$$
\\begin{array}{rcrcr}
-10 & < & x - 5 & < & 10 \\\\
+5 && +5 && +5 \\\\
\\end{array}
$$

Now, we've got our true final answer:

$$
-5 < x < 15
$$

To summarize, our final set of answers for the inequality are any numbers greater than -5, but less than 15.

While you may not have needed an explanation to this problem as drawn out as we did here, the important takeaway is that understanding "why" naturally led us to "how". While memorizing has its place and time in mathematics, particularly as a student taking a timed exam, I realized that understanding "why" could help me remember concepts in the long term.

## Note Taking Technique

I quickly learned in college that I retain information best by physically writing down important concepts into my own words, so my approach remained largely the same, but with a few adjustments:

1. Taking notes on an iPad
2. Color-coding notes
3. Erasing less and crossing out more

Despite each of these adjustments being independent of one another, they ended up complementing each other conveniently.

### Taking Notes on an iPad

One problem I had in college was a significant accumulation of notebooks. Not only did they take up physical space, but searching through them to find information at a later date wasn't a good experience.

To avoid this issue again, I used the [Notability App for iPad](https://notability.com/) to write and organize my notes into folders for each unit. This made it very easy for me to know which parts of my notes I needed to study for a particular exam. At an extra charge, notability also offers a handwriting recognition tool so that you can search your notes like you would a text document on your computer, but I held off on purchasing it until I felt it was really necessary. The organization of my notes alone would save me a lot of searching time.

### Color Coding Notes

I never color coded my notes in college. It's not something I purposely avoided, but if I had to guess why I never did, it's probably because it made taking physical notes a less fluid experience given the extra steps of swapping pens, all while running the risk of potentially losing my thought.

However, now that I was taking notes digitally, using different pen colors was a quick and accessible task. This opened my eyes to how useful color coding could be; it allowed me to get a bird's eye view of my notes, which meant I could quickly scan for something I needed at a later point in time, e.g., a definition, practice problem, or a concept that I initially found unintuitive or confusing.

### Erasing Less and Crossing Out More

Maybe the most fundamental shift in my note taking was never erasing my mistakes. Instead, I would keep the mistake and correct it in bright red ink to the side (with a detailed explanation of where I went wrong). By keeping my mistakes, it allowed me to revisit them at a later time and serve as an example of something I need to avoid doing. This served as a great study tool, and most importantly, a way of learning.

<img
  alt="An example showing how I color-code my notes. Subsection headings are colored purple, concepts are colored black, practice problems are colored pink, and mistakes are colored in red."
  src="../../assets/images/posts/going-back-to-school/note-example.png"
/>

## Takeaways From My Experience

Having only completed two courses so far, I've already taken a lot away from my experience as a student again.

### Deadlines Help

At first, I was hesitant to formally sign-up for classes given that there are so many excellent online resources to accomplish the same thing, but after participating in two courses, I am glad that I committed to it.

Although I could've gone through the entire algebra and precalculus curriculum on my own accord at my own pace, there is no doubt in my mind that the pressure of course deadlines played a vital role in ensuring I was diligent with my studying. There were definitely weekends I don't think I would've been heads down in a textbook unless I had a hard deadline to make for an assignment or upcoming exam.

### Learning "how to learn"

Oftentimes you'll hear students question if what they're learning in math is actually applicable to the real world outside of a classroom setting. While there's a valid point in that argument, I would counter by stating that any opportunity to learn and apply something new _is_ applicable to the real world, and math is an excellent course for that.

At the beginning of a new math lesson, you're presented with information that you have yet to fully comprehend, but by the end of the lesson, you'll have done enough arithmetic work with the concept that you can begin to apply it elsewhere, e.g., a word problem. Most importantly, over the course of that lesson, you'll be required to exercise patience and open mindedness to digest the new material.

Ultimately, math helps you learn "how to learn".

### Appreciating Learning

School is much more enjoyable when learning is the driving force instead of letter grades. I know; as someone who's already gotten a degree, that's easy for me to say, but now having been able to experience this firsthand, I can't help but wish everyone else could, too.

If you've ever read or watched the Harry Potter series, you'll recall that students at Hogwarts are intrinsically driven by their passion to _learn_, whether it be mixing potions, casting spells, or flying brooms. That's how I wish education was perceived.

It's important to take a step back and appreciate the process and opportunity to learn. If you're so focused on the end-goal, you'll be miserable the entire time leading up to it, which is actually the longest part!

## Wrapping Up

This upcoming 2023 Fall Semester marks a year from when I began my enrollment process into Austin Community College, and I couldn't be happier with my decision. Although I started farther back than initially planned, taking lower-level math courses has tested my ego, patience, and logical thinking in ways that will only benefit me in the future. Had I not taken a step back and reassessed my conceptual understanding of math, I don't think I would've been in as good of a place to fundamentally learn and understand what will be introduced to me in the upper-level courses.

This upcoming semester, I plan on taking Calculus I with hopes of enrolling in Discrete Mathematic the following semester. I'm especially eager to take Discrete Mathematics due to its strong emphasis on mathematical proofs and logic, which are two techniques programmers like myself often need to use (indirectly) all the time.

As I officially wrap this up, I can't help but end with a link to a person who has had a significant influence on my approach towards learning in the past year: [Sal Khan](https://www.youtube.com/watch?v=-MTRxRO5SRA).
