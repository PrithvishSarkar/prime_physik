let exerciseList = [
  {
    name: "Bench Press",
    exerciseType: "resistance",
    primaryMuscle: "chest",
    secondaryMuscles: ["front-delts", "triceps"],
    equipments: ["barbell", "bench"],
    preparation:
      "Lie flat on the bench with feet on the floor and grip the bar wider than shoulders.",
    instructions: [
      "Lower the bar slowly to your mid-chest.",
      "Press the bar upward until your arms are fully extended.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Barbell Squat",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "glutes", "lower-back"],
    equipments: ["barbell"],
    preparation:
      "Place the barbell across your upper traps and stand with feet shoulder-width apart.",
    instructions: [
      "Hinge at your hips and bend knees to lower your body.",
      "Descend until thighs are parallel to the floor.",
      "Drive back up to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Deadlift",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["glutes", "hamstrings", "lower-back"],
    equipments: ["barbell"],
    preparation:
      "Stand with feet hip-width apart and the barbell over your mid-foot.",
    instructions: [
      "Hinge down and grip the bar with a flat back.",
      "Lift the bar by extending your hips and knees simultaneously.",
      "Stand tall and then reverse the movement to lower the bar.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Pull-up",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["lats", "biceps", "upper-back"],
    equipments: ["pull-up-bar"],
    preparation:
      "Hang from the bar with an overhand grip wider than your shoulders.",
    instructions: [
      "Pull your chest toward the bar by driving your elbows down.",
      "Continue until your chin is over the bar.",
      "Lower yourself back down with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Push-up",
    exerciseType: "resistance",
    primaryMuscle: "chest",
    secondaryMuscles: ["front-delts", "triceps"],
    equipments: ["bodyweight"],
    preparation:
      "Start in a high plank position with hands slightly wider than shoulders.",
    instructions: [
      "Lower your chest toward the floor by bending your elbows.",
      "Keep your core tight and body in a straight line.",
      "Push back up to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Overhead Press",
    exerciseType: "resistance",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["triceps", "front-delts"],
    equipments: ["barbell"],
    preparation:
      "Stand with feet shoulder-width apart holding the bar at upper-chest height.",
    instructions: [
      "Press the bar directly overhead until arms are locked.",
      "Exhale as you press upward.",
      "Lower the bar back to the chest with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Plank",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs", "obliques"],
    equipments: ["bodyweight"],
    preparation:
      "Prop yourself up on your forearms and toes, keeping your body in a straight line.",
    instructions: [
      "Engage your glutes and core to prevent hips from sagging.",
      "Maintain a neutral neck position looking at the floor.",
      "Hold the position for the desired duration.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Burpee",
    exerciseType: "cardio",
    primaryMuscle: null,
    secondaryMuscles: [],
    equipments: ["bodyweight"],
    preparation: "Stand with feet shoulder-width apart.",
    instructions: [
      "Drop into a squat position and place hands on the floor.",
      "Kick your feet back into a plank position.",
      "Immediately return your feet to the squat position and jump up explosively.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Kettlebell Swing",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["glutes", "lower-back", "hamstrings"],
    equipments: ["kettlebell"],
    preparation:
      "Stand with feet wider than shoulders and the bell on the floor in front of you.",
    instructions: [
      "Hinge at the hips to grab the bell and swing it back between your legs.",
      "Snap your hips forward to swing the kettlebell to chest height.",
      "Control the descent back between your legs for the next rep.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Lateral Raise",
    exerciseType: "resistance",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["lateral-delts"],
    equipments: ["dumbbell"],
    preparation:
      "Stand with a dumbbell in each hand at your sides, palms facing in.",
    instructions: [
      "Raise your arms out to the sides until they are parallel to the floor.",
      "Keep a slight bend in the elbows.",
      "Lower the weights slowly back to your sides.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Jump Rope",
    exerciseType: "cardio",
    primaryMuscle: null,
    secondaryMuscles: [],
    equipments: ["jump-rope"],
    preparation:
      "Stand with feet together holding the rope handles at your sides.",
    instructions: [
      "Swing the rope over your head using your wrists.",
      "Jump slightly off the ground as the rope passes under your feet.",
      "Maintain a steady rhythm.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Barbell Row",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["lats", "upper-back", "biceps"],
    equipments: ["barbell"],
    preparation:
      "Hinge at the hips with a flat back, holding the barbell with an overhand grip.",
    instructions: [
      "Pull the bar toward your lower ribs by driving your elbows back.",
      "Squeeze your shoulder blades together at the top of the movement.",
      "Lower the bar slowly until your arms are fully extended.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Dumbbell Bicep Curl",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["biceps", "forearms"],
    equipments: ["dumbbell"],
    preparation:
      "Stand straight with a dumbbell in each hand, palms facing forward and elbows close to your torso.",
    instructions: [
      "Curl the weights while contracting your biceps.",
      "Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Lower the dumbbells back to the starting position with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Tricep Dip",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["triceps", "front-delts"],
    equipments: ["bench"],
    preparation:
      "Sit on the edge of a bench, place your hands next to your hips, and extend your legs in front of you.",
    instructions: [
      "Slide off the bench while supporting your weight with your hands.",
      "Lower your body by bending your elbows until they are at a 90-degree angle.",
      "Push through your palms to return to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Leg Press",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "glutes"],
    equipments: ["machine"],
    preparation:
      "Sit in the leg press machine and place your feet shoulder-width apart on the platform.",
    instructions: [
      "Lower the platform by bending your knees toward your chest.",
      "Keep your back flat against the seat.",
      "Press the platform back up using your heels, stopping just before your knees lock.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Romanian Deadlift",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["hamstrings", "glutes", "lower-back"],
    equipments: ["barbell"],
    preparation:
      "Stand with feet hip-width apart, holding a barbell in front of your thighs with an overhand grip.",
    instructions: [
      "Hinge at the hips while keeping your legs relatively straight and your back flat.",
      "Lower the bar along your shins until you feel a deep stretch in your hamstrings.",
      "Drive your hips forward to return to a standing position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Lat Pulldown",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["lats", "biceps"],
    equipments: ["machine"],
    preparation:
      "Sit at the machine and grip the wide bar with an overhand grip, slightly wider than shoulder-width.",
    instructions: [
      "Pull the bar down toward your upper chest while leaning back slightly.",
      "Focus on squeezing your back muscles rather than pulling with your arms.",
      "Control the weight as you allow the bar to return to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Forward Lunge",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "glutes", "hamstrings"],
    equipments: ["bodyweight"],
    preparation: "Stand tall with feet hip-width apart and hands on your hips.",
    instructions: [
      "Take a large step forward with one leg and lower your hips.",
      "Both knees should bend at approximately 90-degree angles.",
      "Push back through the front heel to return to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Arnold Press",
    exerciseType: "resistance",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["front-delts", "triceps"],
    equipments: ["dumbbell", "bench"],
    preparation:
      "Sit on a bench with back support, holding dumbbells in front of your shoulders with palms facing you.",
    instructions: [
      "Press the dumbbells overhead while rotating your palms outward.",
      "Fully extend your arms at the top of the movement.",
      "Lower the weights back to the starting position, rotating your palms back toward you.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Skull Crusher",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["triceps"],
    equipments: ["ez-bar", "bench"],
    preparation:
      "Lie flat on a bench holding an EZ bar over your chest with a narrow grip.",
    instructions: [
      "Bend your elbows to lower the bar toward your forehead, keeping your upper arms stationary.",
      "Extend your elbows to push the bar back to the starting position.",
      "Avoid flaring your elbows outward during the movement.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Bulgarian Split Squat",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "glutes"],
    equipments: ["dumbbell", "bench"],
    preparation:
      "Stand a few feet in front of a bench and place the top of one foot behind you on the bench.",
    instructions: [
      "Lower your hips until your front thigh is nearly parallel to the floor.",
      "Keep your torso upright and your front knee aligned with your foot.",
      "Drive back up through your front heel to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Russian Twist",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["obliques", "abs"],
    equipments: ["medicine-ball"],
    preparation:
      "Sit on the floor with knees bent, feet slightly elevated, holding a medicine ball with both hands.",
    instructions: [
      "Twist your torso to the right and touch the medicine ball to the floor.",
      "Twist your torso to the left and touch the ball to the floor.",
      "Maintain a flat back and engaged core throughout the movement.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Calf Raise",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["calves"],
    equipments: ["machine"],
    preparation:
      "Position your toes on the edge of the platform with your heels hanging off and shoulders under the pads.",
    instructions: [
      "Raise your heels as high as possible by pushing through the balls of your feet.",
      "Squeeze your calves at the top for a second.",
      "Lower your heels slowly until they are below the level of the platform.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Hammer Curl",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["biceps", "forearms"],
    equipments: ["dumbbell"],
    preparation:
      "Stand with a dumbbell in each hand, arms at your sides, and palms facing your torso.",
    instructions: [
      "Curl the weights toward your shoulders while keeping your palms facing each other.",
      "Squeeze your biceps at the top of the lift.",
      "Lower the dumbbells back to the starting position with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Face Pull",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["rear-delts", "upper-back"],
    equipments: ["cable"],
    preparation:
      "Set a cable machine to face height with a rope attachment and grasp the ends with an overhand grip.",
    instructions: [
      "Pull the rope toward your forehead while pulling the ends apart.",
      "Squeeze your rear deltoids and mid-back at the end of the movement.",
      "Slowly return to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Glute Bridge",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["glutes", "hamstrings", "abs"],
    equipments: ["bodyweight"],
    preparation:
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
    instructions: [
      "Lift your hips toward the ceiling by squeezing your glutes.",
      "Hold the bridge position at the top for a second, forming a straight line from knees to shoulders.",
      "Lower your hips back to the floor.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Leg Curl",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["hamstrings"],
    equipments: ["machine"],
    preparation:
      "Lie face down on the machine with the padded lever positioned just behind your ankles.",
    instructions: [
      "Curl your legs toward your glutes as far as possible.",
      "Squeeze your hamstrings at the top of the movement.",
      "Lower the weight slowly back to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Tricep Pushdown",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["triceps"],
    equipments: ["cable"],
    preparation:
      "Stand at a cable station with a bar or rope attachment set at head height.",
    instructions: [
      "Push the attachment down until your arms are fully extended.",
      "Keep your elbows pinned to your ribs and avoid using momentum.",
      "Slowly return the attachment to chest height.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Chest Fly",
    exerciseType: "resistance",
    primaryMuscle: "chest",
    secondaryMuscles: ["front-delts"],
    equipments: ["dumbbell", "bench"],
    preparation:
      "Lie on a flat bench holding dumbbells over your chest with palms facing each other.",
    instructions: [
      "Lower the weights in a wide arc out to your sides until you feel a stretch in your chest.",
      "Keep a slight bend in your elbows throughout the movement.",
      "Squeeze your chest to bring the dumbbells back together at the top.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Reverse Fly",
    exerciseType: "resistance",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["rear-delts", "upper-back"],
    equipments: ["dumbbell"],
    preparation:
      "Lean forward at the hips with a flat back, holding dumbbells hanging straight down with palms facing each other.",
    instructions: [
      "Raise your arms out to the sides until they are parallel to the floor.",
      "Squeeze your shoulder blades together at the peak of the movement.",
      "Lower the weights back to the start with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Step-up",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "glutes"],
    equipments: ["bench"],
    preparation: "Stand tall in front of a sturdy bench or box.",
    instructions: [
      "Place your right foot firmly on the bench.",
      "Drive through your right heel to lift your body up until your right leg is straight.",
      "Step back down with the left foot followed by the right.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Goblet Squat",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "glutes", "abs"],
    equipments: ["kettlebell"],
    preparation:
      "Hold a kettlebell against your chest with both hands, keeping your elbows tucked in.",
    instructions: [
      "Squat down by sitting your hips back and keeping your chest up.",
      "Lower until your elbows touch the inside of your knees.",
      "Drive through your heels to return to a standing position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Hip Thrust",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["glutes", "hamstrings", "lower-back"],
    equipments: ["barbell", "bench"],
    preparation:
      "Sit on the floor with your upper back against a bench and a padded barbell across your hips.",
    instructions: [
      "Drive through your heels to lift your hips toward the ceiling.",
      "Squeeze your glutes hard at the top while keeping your chin tucked.",
      "Lower your hips back toward the ground with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Superman",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["lower-back", "glutes"],
    equipments: ["bodyweight"],
    preparation:
      "Lie face down on the floor with your arms extended forward and legs straight.",
    instructions: [
      "Simultaneously lift your arms, chest, and legs off the floor as high as comfortable.",
      "Hold the contraction for two seconds while squeezing your lower back.",
      "Slowly lower back to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Mountain Climber",
    exerciseType: "cardio",
    primaryMuscle: null,
    secondaryMuscles: [],
    equipments: ["bodyweight"],
    preparation:
      "Start in a high plank position with your hands directly under your shoulders.",
    instructions: [
      "Drive your right knee toward your chest as far as possible.",
      "Quickly switch and drive your left knee forward while extending the right leg back.",
      "Continue alternating legs at a fast pace while keeping your back flat.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Bicycle Crunch",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs", "obliques"],
    equipments: ["bodyweight"],
    preparation:
      "Lie on your back with hands behind your head and legs elevated with knees bent at 90 degrees.",
    instructions: [
      "Bring your right elbow and left knee toward each other while straightening the right leg.",
      "Switch sides, bringing your left elbow toward your right knee.",
      "Continue in a fluid, pedaling motion.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Leg Raise",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs"],
    equipments: ["bodyweight"],
    preparation:
      "Lie flat on your back with your legs straight and hands tucked under your glutes for support.",
    instructions: [
      "Lift your legs toward the ceiling until they are vertical, keeping them as straight as possible.",
      "Lower your legs slowly back toward the floor.",
      "Stop just before your feet touch the ground to maintain tension on the abs.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Chin-up",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["biceps", "lats"],
    equipments: ["pull-up-bar"],
    preparation:
      "Hang from the bar with an underhand grip (palms facing you) at shoulder-width.",
    instructions: [
      "Pull your body upward until your chin is above the bar.",
      "Keep your elbows close to your body and focus on the bicep contraction.",
      "Lower yourself slowly back to a full hang.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Side Plank",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["obliques", "lateral-delts"],
    equipments: ["bodyweight"],
    preparation:
      "Lie on your side with your legs straight and prop your upper body up on your forearm.",
    instructions: [
      "Lift your hips off the floor until your body forms a straight line from head to feet.",
      "Hold the position while breathing steadily and engaging your obliques.",
      "Repeat on the opposite side.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Bird-Dog",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["lower-back", "glutes"],
    equipments: ["bodyweight"],
    preparation:
      "Start on your hands and knees in a tabletop position with a neutral spine.",
    instructions: [
      "Simultaneously extend your right arm forward and your left leg backward.",
      "Hold for a second, focusing on balance and keeping your hips square to the floor.",
      "Return to the starting position and switch sides.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Dead Bug",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs"],
    equipments: ["bodyweight"],
    preparation:
      "Lie on your back with arms reaching toward the ceiling and knees bent at 90 degrees (tabletop).",
    instructions: [
      "Slowly lower your right arm behind your head and your left leg toward the floor.",
      "Keep your lower back pressed firmly into the floor throughout.",
      "Return to center and repeat with the opposite arm and leg.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Sumo Squat",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["glutes", "quads", "abs"],
    equipments: ["dumbbell"],
    preparation:
      "Stand with a very wide stance and toes pointed outward at a 45-degree angle, holding a dumbbell with both hands.",
    instructions: [
      "Lower your hips by bending your knees while keeping your chest upright.",
      "Go down until your thighs are parallel to the floor.",
      "Drive through your heels to return to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Box Jump",
    exerciseType: "cardio",
    primaryMuscle: null,
    secondaryMuscles: [],
    equipments: ["bench"],
    preparation:
      "Stand facing a sturdy box or bench with feet hip-width apart.",
    instructions: [
      "Swing your arms and explode upward to jump onto the center of the box.",
      "Land softly with your knees slightly bent and hips back.",
      "Step down carefully one foot at a time to return to the start.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Thruster",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "triceps", "front-delts"],
    equipments: ["barbell"],
    preparation:
      "Hold a barbell at shoulder height in a front rack position with feet shoulder-width apart.",
    instructions: [
      "Perform a full squat while keeping the bar at shoulder height.",
      "As you stand up, use the upward momentum to press the bar overhead.",
      "Lower the bar back to your shoulders as you begin the next squat.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Front Raise",
    exerciseType: "resistance",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["front-delts"],
    equipments: ["dumbbell"],
    preparation:
      "Stand tall with dumbbells in front of your thighs and palms facing your body.",
    instructions: [
      "Raise the weights straight out in front of you until they reach shoulder height.",
      "Keep a very slight bend in the elbows and avoid swinging.",
      "Lower the weights back down slowly with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Wall Sit",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["quads", "calves"],
    equipments: ["bodyweight"],
    preparation:
      "Lean your back flat against a wall and slide down until your thighs are parallel to the floor.",
    instructions: [
      "Adjust your feet so your knees are directly above your ankles.",
      "Keep your back flat against the wall and hands at your sides.",
      "Hold the position for the required duration.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Hollow Body Hold",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs"],
    equipments: ["bodyweight"],
    preparation:
      "Lie on your back with arms extended overhead and legs straight.",
    instructions: [
      "Simultaneously lift your legs, head, and shoulders off the floor.",
      "Press your lower back into the ground so there is no gap.",
      "Hold this 'banana' shape while maintaining core tension.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Diamond Push-up",
    exerciseType: "resistance",
    primaryMuscle: "arms",
    secondaryMuscles: ["triceps", "front-delts"],
    equipments: ["bodyweight"],
    preparation:
      "Set up in a push-up position with your index fingers and thumbs touching to form a diamond shape.",
    instructions: [
      "Lower your chest toward your hands while keeping your elbows close to your sides.",
      "Keep your body in a straight line from head to heels.",
      "Push back up to the starting position focusing on your triceps.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Inverted Row",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["upper-back", "biceps", "forearms"],
    equipments: ["barbell"],
    preparation:
      "Set a barbell in a squat rack at waist height and lie underneath it.",
    instructions: [
      "Grip the bar with an overhand grip and pull your chest toward it.",
      "Keep your body rigid and in a straight line like a plank.",
      "Lower yourself back down with control until arms are fully extended.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Pike Push-up",
    exerciseType: "resistance",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["triceps", "upper-back"],
    equipments: ["bodyweight"],
    preparation:
      "Start in a high plank position, then walk your feet in to lift your hips high, forming an inverted 'V'.",
    instructions: [
      "Lower the top of your head toward the floor between your hands by bending your elbows.",
      "Keep your hips high throughout the entire movement.",
      "Push back up until your arms are fully extended.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Stability Ball Crunch",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs"],
    equipments: ["stability-ball"],
    preparation:
      "Sit on the stability ball and walk your feet forward until your lower back is centered on the ball.",
    instructions: [
      "Place your hands behind your head and crunch your upper body toward your ceiling.",
      "Keep the ball as still as possible using your legs for balance.",
      "Lower your upper body back down to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Jumping Jacks",
    exerciseType: "cardio",
    primaryMuscle: null,
    secondaryMuscles: [],
    equipments: ["bodyweight"],
    preparation: "Stand with feet together and arms at your sides.",
    instructions: [
      "Jump while spreading your legs wider than shoulder-width and clapping your hands overhead.",
      "Jump again to return to the starting position.",
      "Maintain a fast and steady rhythm.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "High Knees",
    exerciseType: "cardio",
    primaryMuscle: null,
    secondaryMuscles: [],
    equipments: ["bodyweight"],
    preparation: "Stand in place with your feet hip-width apart.",
    instructions: [
      "Run in place, bringing your knees up to waist height or higher.",
      "Pump your arms in sync with your legs.",
      "Stay on the balls of your feet.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Bear Crawl",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["quads", "triceps", "front-delts"],
    equipments: ["bodyweight"],
    preparation:
      "Start on all fours with your hands under shoulders and knees under hips, then lift knees slightly off the floor.",
    instructions: [
      "Move forward by moving your right hand and left foot simultaneously.",
      "Switch to the left hand and right foot, keeping your hips low and back flat.",
      "Continue crawling for the desired distance or time.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Inchworm",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["abs", "hamstrings"],
    equipments: ["bodyweight"],
    preparation: "Stand tall with feet hip-width apart.",
    instructions: [
      "Hinge at your hips to touch the floor, then walk your hands forward until you are in a high plank.",
      "Hold the plank for a second, then walk your feet toward your hands while keeping legs as straight as possible.",
      "Stand back up to complete one rep.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Lateral Lunges",
    exerciseType: "resistance",
    primaryMuscle: "legs",
    secondaryMuscles: ["glutes", "quads"],
    equipments: ["bodyweight"],
    preparation: "Stand with feet hip-width apart and hands at your chest.",
    instructions: [
      "Take a large step to the side with your right leg, hinging at the hips and bending the right knee.",
      "Keep your left leg straight and your chest up.",
      "Push off the right foot to return to the center and switch sides.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Resistance Band Pull-Apart",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["rear-delts", "upper-back"],
    equipments: ["resistance-band"],
    preparation:
      "Stand tall holding a resistance band in front of you at shoulder height with arms extended.",
    instructions: [
      "Pull the band apart by moving your arms out to the sides.",
      "Squeeze your shoulder blades together as the band touches your chest.",
      "Slowly return to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Medicine Ball Slam",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["front-delts", "abs", "glutes"],
    equipments: ["medicine-ball"],
    preparation:
      "Stand with feet shoulder-width apart, holding a medicine ball with both hands.",
    instructions: [
      "Lift the ball overhead with arms fully extended.",
      "Slam the ball into the floor as hard as possible by engaging your core and hinging forward.",
      "Catch the ball on the bounce and repeat.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Dumbbell Shrugs",
    exerciseType: "resistance",
    primaryMuscle: "back",
    secondaryMuscles: ["upper-back"],
    equipments: ["dumbbell"],
    preparation:
      "Stand with feet hip-width apart holding a dumbbell in each hand at your sides.",
    instructions: [
      "Lift your shoulders toward your ears as high as possible.",
      "Hold the contraction for a second at the top.",
      "Lower your shoulders back down with control.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
  {
    name: "Cable Woodchopper",
    exerciseType: "resistance",
    primaryMuscle: "core",
    secondaryMuscles: ["obliques", "front-delts"],
    equipments: ["cable"],
    preparation:
      "Set the cable to high position and stand sideways to the machine, holding the handle with both hands.",
    instructions: [
      "Pull the handle diagonally across your body toward your opposite knee.",
      "Rotate your torso and pivot your back foot as you move.",
      "Slowly return the handle to the starting position.",
    ],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/young-man-lifting-dumbbells_24877-81866.jpg",
  },
];

export default exerciseList;
