# Quiz 1 - My First Blog
![blog](readmeImgs/blog.png)<br /><br />
![footer](readmeImgs/footer.png)<br />

## Grading

#### NOTE. Your blog page need not to be exactly the same with the example.

0. Html Title (5%)

1. Fixed centered covered Background (15%)<br />
  * The background image(red part) doesn't scroll along with the content. <br /></font>
![Fixed centered covered background](readmeImgs/problem1.png)

2. Foreground <br />
  * (1) Transparent foreground (10%)<br />
  Your article should be able to see the background image <br />
![Transparent foreground](readmeImgs/problem2.png) <br /><br />
  * (2) Max-width and responsive width (20%)<br />
The content of the webpage should be responsive according to the window width <br />
![max-width and responsive width](readmeImgs/problem3.png) <br />

3. Custom Header Font (5%)<br />
  * ![Custom Header Font](readmeImgs/problem4.png) <br />

4. Article  <br />
  * (1) Quote (10%)<br />
  The quote should indent with a grey line <br />
  ![Custom text decorations](readmeImgs/problem5-1.png) <br /><br />
  * (2) Custom text decorations for dates and article (10%)<br />
  (e.g. the space between date letters, and "auto" uppercase for dates, bold title, etc.) <br />
  ![Custom text decorations](readmeImgs/problem5-2.png) <br /><br />
  * (3) Spacing for the dates (5%)<br />
  ![Spacing for the dates](readmeImgs/problem5-3.png) <br /><br />

5. Text shadow in header and footer (10%)<br />
  * ![Text shadow](readmeImgs/problem6.png) <br />

6. Rem-based sizing<br />
  * Increasing font size also increases spaces (10%)<br />

## Submission
Open a new merge request when you finished your quiz. <br />
We'll accept all merge requests so that you can open new request after the lab.<br />
**DEADLINE**: 2018/03/08 23:59

## Git Workflow
#### NOTE :  <br />
Make sure you are in the project folder. <br />
Make sure you have configured user.email and user.name for git.

1. Fork the project.
2. Clone `your` project .../{your id}/lab-css-blog-quiz.git into your computer.
3. Do the quiz.
4. Submit your code to gitlab. <br />
  * Step 1. Tell git to track all files in the project <br />
  git add . or git add -A
  * Step 2. Commit your changes <br />
  git commit -m "Finish quiz 1"
  * Step 3. Push to gitlab. <br />
  git push
5. Open merge request
  * Source branch: master branch in `your project`
  * Target branch: `Your ID`
  * `Title` : std{your ID} Submission
  * If you open merge request after lab hours, append "late" to your title <br />
  e.g. std105062558 Submission late

Q: How to check if I have submitted my code to gitlab successfully? <br />
A: Clone our MAIN project, checkout your branch, and see your changes. <br />
git clone https://shwu10.cs.nthu.edu.tw/courses-software-studio-2017-spring/lab-css-blog-quiz.git <br />
git checkout {your ID} (e.g. git checkout 105062558) <br />

## `IMPORTANT`<br />
From now on, we will not help you to deal with any git problems during the quiz.<br />
If there's nothing in your branch, you will get 0 points.
