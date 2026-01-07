const zodiasign=["Aries", "Taurus", "Gemini"," Cancer", "Leo"," Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const compliments=["You are kind in the most genuine way",
     "Your smile can make anyone’s day better",
      "You have a beautiful way of thinking",
       "People feel safe around you", 
       "Your presence is calming", "You are wonderfully creative", 
       "You make challenges look easy",
        "Your confidence is inspiring", 
       "You bring warmth wherever you go", 
       "You have a heart full of kindness", 
       "You light up every room you enter", 
       "You encourage others without even trying",
        "Your laughter is contagious",
         "You are truly unforgettable",
          "You have incredible inner strength", 
          "Your empathy is a gift", 
          "You notice the little things that matter",
           "You make people feel appreciated",
            "Your positivity spreads easily",
             "You are wise beyond your years",
              "You handle tough times with grace", 
              "You make others feel welcome", 
              "You inspire people to be better", 
              "Your energy feels refreshing",
               "You have a naturally soothing voice",
                "You are beautifully honest",
                 "Your determination is amazing",
                  "You make even ordinary moments special", 
                  "You radiate kindness",
                   "You have a truly beautiful soul", 
                "You make the world brighter just by being in it"
            ];
const victimecardcomplements=["You care so much that people sometimes forget to care for you"
    , "Your kindness is so natural that others take it for granted", "You always put others first, even when it costs you peace", "You forgive easily, so people assume you never get hurt", "You understand everyone, even when no one understands you", "Your soft heart feels pain more deeply than others realize", "You give love freely, even when it is not returned", "You stay loyal to people who would never do the same for you", "You see the good in others, even when they don’t deserve it", "You hide your hurt so others don’t feel guilty", "You carry emotional pain silently so others don’t have to", "You always listen, but rarely feel truly heard", "You are strong for everyone, even when you feel weak inside", "You smile so others don’t worry, even when you’re breaking", "You love deeply, which makes heartbreak even harder", "You never ask for help, even when you need it most", "You give second chances, even when the first one broke you", "You stay gentle in a world that keeps trying to harden you", "You expect nothing in return, which is why you’re often overlooked", "You remain genuine, even after being hurt again and again"
];
const recommendations=["Learn to set healthy boundaries without feeling guilty", "Say no when something doesn’t feel right", "Surround yourself with people who respect your kindness", "Practice self-love as much as you give love to others", "Donate time or help to causes you care about", "Express your feelings instead of hiding them", "Appreciate yourself the way you appreciate others", "Learn to walk away from draining relationships", "Focus on people who value your effort", "Ask for help when you need support", "Recognize that your feelings also matter", "Spend time doing activities that make you happy", "Reward yourself for small achievements", "Learn to forgive yourself for past mistakes", "Give love without losing yourself in the process", "Volunteer to help others while caring for your limits", "Replace people-pleasing with self-respect", "Speak kindly to yourself every day", "Let go of situations you cannot control", "Surround yourself with positive energy", "Build emotional strength through self-awareness", "Reflect on your needs before helping others", 
    "Choose peace over constantly proving yourself", "Learn to accept compliments without doubt", "Understand that it’s okay to put yourself first sometimes", "Heal from past pain instead of carrying it forward", "Stand up for yourself calmly and confidently", "Celebrate your uniqueness instead of seeking approval", "Practice gratitude for who you are becoming", "Seek growth, not validation"


];
const predictions=["Future crorepati entrepreneur",
     "Successful doctor saving lives", "World-class engineer creating innovations", "Famous motivational speaker inspiring millions", "Best-selling author with global readers", "Top software developer changing technology", "Renowned scientist making discoveries", "Highly respected professor guiding students", "Creative artist loved worldwide", "Iconic musician touching hearts", "Influential leader bringing positive change", "Successful business owner building an empire", "Compassionate social worker helping communities", "Award-winning filmmaker telling powerful stories", "Brilliant lawyer winning major cases", "Fitness and wellness coach transforming lives", "International traveler exploring the world", "Financial expert achieving massive wealth", "Peaceful spiritual guide supporting others", "Kind-hearted philanthropist giving back to society"


];
const form=document.getElementById('astroform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
     const surname=document.getElementById('surname').value;
    
      const day=parseInt(document.getElementById('day').value);
      
      const month=parseInt(document.getElementById('month').value);
      
      const year=parseInt(document.getElementById('year').value);
      
      const text=`Hi ${name} nice to meet you .Yor zodiac sign is ${zodiasign[month-1]}. ${compliments[day-1]}.${victimecardcomplements[day%20]}
                  ${recommendations[(day*month)%30]}. ${predictions[(name.length*surname.length)%20]} `;
  
   document.getElementById('result').textContent=text;
    
       
    
})