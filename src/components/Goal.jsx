import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Goal extends Component {
    render() { 
        return <div className='goal'>
            <div>
            <h1>Now that you've found out your BMI, let's look at what are the recommendations according to what you want to achieve.</h1>
            </div>

            <div>
                <h2>Losing weight</h2>
                <p className='text'>
                Each one of your meals should include a protein source, a fat source, vegetables and a small portion of complex carbohydrates, such as whole grains.

                Eating a recommended amount of protein is essential to help preserve your health and muscle mass while losing weight (5Trusted Source).

                Evidence suggests that eating adequate protein may improve cardiometabolic risk factors, appetite, and body weight, (6Trusted Source, 7Trusted Source, 8Trusted Source).

                Here’s how to determine how much you need to eat without eating too much. Many factors determine your specific needs, but generally, an average person needs (9Trusted Source):

                56–91 grams per day for the average male
                46–75 grams per day for the average female
                Diets with adequate protein can also help:

                reduce cravings and obsessive thoughts about food by 60%
                reduce the desire to snack late at night by half
                make you feel full
                In one study, people on a higher protein diet ate 441 fewer calories per day.
                </p>
            </div>

            <div>
                <h2>Maintaining weight</h2>
                <p className='text'>
                According to the National Weight Control Registry, which follows more than 10,000 people who have lost at least 30 pounds and kept them off, at least 78 percent of successful maintainers eat breakfast every day.
                 Meanwhile, according to Cornell’s Global Healthy Weight Registry, 96 percent of people who have always maintained a healthy weight are daily breakfast eaters. It appears that, whatever your starting weight,
                  breakfast can help you maintain a healthy one going forward.

                Why is it so important to eat soon after you rise? Breakfast — especially one high in protein and/or fiber — is a veritable craving crusher. For instance, in a Journal of the American College of Nutrition study,
                people who ate fiber-packed oatmeal reported feeling significantly more satisfied and less hungry hours later compared to people who started their days with ready-to-eat cereal.
                “Counting calories is great to do for a short period so that you gain awareness of what you’re putting into your body,” McHale says. “But once you get a feel for things, you shouldn’t worry about counting calories,
                 and should instead focus on making the food choices you know are going to support your goals.”

                That’s in line with Cornell research, which shows that people who have successfully learned how to maintain weight most often focus on food quality — such as whether a food is whole or processed — rather than calories.
                 After all, if that pint of ice cream says it’s low in fat, that doesn’t mean it’s healthy.

                </p>
            </div>

            <div>
                <h2>Gaining weight</h2>
                <p className='text'>
                The physical act of building muscle is easier said than done because in order to build muscle we need to have multiple variables aligned both in regard to our training and nutrition.

                A great starting point for everyone on the quest of adding mass to their frame is to first define what muscle building actually is. The act of muscle building, or purposely causing muscle to grow through resistance training,
                 is often referred to as muscle hypertrophy.
                <br />

                The more protein your body stores—in a process called protein synthesis—the larger your muscles grow. But your body is constantly draining its protein reserves for other uses—making hormones, for instance.

                The result is less protein available for muscle building. To counteract that, you need to “build and store new proteins faster than your body breaks down old proteins,” says Michael Houston, Ph.D., a professor of nutrition at Virginia Tech University.

                Shoot for about 1 gram of protein per pound of body weight, which is roughly the maximum amount your body can use in a day, according to a landmark study in the Journal of Applied Physiology.

                For example, a 160-pound man should consume 160 grams of protein a day—the amount he’d get from an 8-ounce chicken breast, 1 cup of cottage cheese, a roast-beef sandwich, two eggs, a glass of milk, and 2 ounces of peanuts.
                Split the rest of your daily calories equally between carbohydrates and fats.

                If you want to build muscle and strength, you have to train heavy, says Curtis Shannon, C.S.C.S. "Training heavy, safely and efficiently, has many benefits," says Shannon. "Heavy training challenges the muscles not only concentrically but eccentrically.
                 If dont right, the stimulus of heavy weight going down with control and going back up will cause greater muscle tear and rebuild."

                That means not every set you do should have you pumping out 10-15 reps. Yes, high-rep sets can have value, but for multi-joint moves like squats and bench presses, and deadlifts, don't be afraid to do sets of, say, 5 reps.
                That'll allow you to use more weight, building more pure strength, says Samuel. And as you progress, that new strength will allow you to lift heavier weights for more reps.

                One way you can approach this in your training: Lead off every workout with an exercise that lets you train low-rep. Do 4 sets of 3-5 reps on your first exercise, then do 3 sets of 10-12 reps for every move after that.
                "It's the best of both worlds," says Samuel, "letting you build pure strength early, then pile up reps later.

                </p>
            </div>

            <div>
                <h3>
                    Good!
                </h3>
                <p className='text'>
                Now that you understand the importance of your diet and Macronutrients, jump to the next page and calculate your macros to see how much you need to eat in order to achieve your goal.
                </p>
                <Link to='/Macro' className='linkText' style={{paddingBottom: '15px'}}>CLICK HERE TO JUMP TO THE MACROS CALCULATOR!</Link>
            </div>

        </div>;
    }
}
 
export default Goal;