<div align="center">

# Jubilife Power Plant

</div>

<img align="right" width="450px" src="https://archives.bulbagarden.net/media/upload/thumb/a/a9/Hisui_Jubilife_Village_Map.png/500px-Hisui_Jubilife_Village_Map.png" />

In order to theoretically figure out how many voltorbs are needed to fully power a village, we'll 
need to figure out how much energy we need to produce first. 
First off we'll find an estimate of how much energy will be needed to run the research laboratory. Since we don't 
have any information on how much power is needed for researching pokemon or the square footage of the place, we'll have to base our 
estimates off of American laboratories. According to ESource, a solutions-based research, consulting, and data science firm, 
American labs use 30 to 100 kilowatt-hours (kWh) of electricity and 75,000 to 800,000 Btu of natural gas per square foot each year
([link](https://esource.bizenergyadvisor.com/article/laboratories)). After converting 
Btu to kWh and adding the estimated kwh used: American labs use 51.98 to 334.46 kWh per square foot each year. And through various sources, I came 
to the conclusion that the average square feet per researcher is around 175, and that in most pokemon games the professor usually has 2-3 assistants.
So we'll say that there will be 4 people in the laboratory including the professor, making the size of the laboratory to be around 700 square feet.
That means our laboratory will use 36,386 to 234,122 kWh each year. 

Now to account for the residents within Jubilife village we'll need the population and the average amount of energy they will use. Thanks to 
Bulbapedia, we know the population of Jubilife village is 102 ([link](https://bulbapedia.bulbagarden.net/wiki/Jubilife_Village)).
And to answer how much energy will be consumed per household, we based our estimate on an answer to a FAQ on the U.S.
Energy Information Administration ([link](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3)), which said the average household consumes an average of
886 kWh(kilowatthours) per month. Even though there aren't many electrical appliances at the time we'll still use that value for potential future growth.
So with those two pieces of data, we can extrapolate that the residents will use a total of 90,372 kWh per month and 1,084,464 kWh per year.

<br>
<div align="center">

Energy consumption estimates
| Consumer   | kWh per month   | kWh per Year      |
| ---------- | --------------- | ----------------- | 
| Laboratory | 3,032 to 19,510 | 36,386 to 234,122 |
| Residents  | 90,372          | 1,084,464         |

</div>

<br>

Since our estimate of energy consumption includes a range, we'll just use the highest potential amount for the sake of caution and on top of that,
double it. In the end that comes out to be 2,637,172 kWh per year. 

<br>

<div align="center">

## Voltorb

</div>

Now we need to figure out how much energy a Voltorb can produce. Based off some google searches to determine if there was a
measurement of voltage/wattage for certain electric moves, I was
able to find out that the move thunderbolt is able to produce 100,000 volts (which is the literal translation of the move thunderbolt),
a move that Voltorb can learn if given the TM (Technical Machine). However, if we were to work off the assumption that the power of a move
determines how many volts is produced, then we should seek out other moves that could potentially generate more power. According to the site
Serebii ([link](https://www.serebii.net/pokedex-swsh/voltorb/)), Hisuian Voltorb can also learn the following electric moves 
(I've gone ahead to include thunderbolt as well for comparison). 

<br>
<div align="center">

Moves
| Name          | Attack | Accuracy | Power Points |
| ------------- | ------ | -------- | ------------ |
| Electro Ball  | ??     | 100      | 10           |
| Thunder Shock | 40     | 100      | 30           |
| Charge Beam   | 50     | 90       | 10           |
| Shock Wave    | 60     | 100      | 20           |
| Spark         | 65     | 100      | 20           |
| Volt Switch   | 70     | 100      | 20           |
| Discharge     | 80     | 100      | 15           |
| Thunderbolt   | 90     | 100      | 15           |
| Thunder       | 110    | 70       | 10           |

<br>

Electro Ball Damage Calculation
| Speed                      | Base Power |
| -------------------------- | ---------- | 
| Target Speed > 50% of User | 60         |  
| Target Speed > 33% of User | 80         | 
| Target Speed > 25% of User | 120        |
| Target Speed < 25% of User | 150        |

</div>

<br>

According to these two tables the reliable/strongest move would be electro ball in this situation. That is due
to the fact that the base power of the move electro ball is dependent on how much faster the user is than the target.
And since the target Voltorb would be using electro ball on would have a speed stat of 0, the move electro ball would 
have a base damage of 150. On top of that, it has an accuracy of 100.

Since there is no difinitive answer to how many volts the move electro ball can produce, we'll have to do a little
math. First we'll divide the voltage thunderbolt produces by its attack power ( 100,000 / 90 ). This will give us the voltage per one 
attack power ( 1,111.11111 ). Then we'll multiply that by the attack power of 150 which returns 166,666.667. So based off the
assumption that the power of a move determines how many volts is produced, the move electro ball will produce 166,666 volts if we round down.

Because our measurement for energy consumption is in kWh we'll need to convert voltorbs output to that respective measurement. To start,
we're estimating that electric ball will take approximately 9 seconds to charge, 2 seconds to fire, and maybe 1 extra second to land
([link](https://www.youtube.com/watch?v=iG4dfKYnYEc)). Therefore, Voltorb can fire off electric ball every 12 seconds, resulting in 5 uses per minute,
which outputs 833,330 volts per minute and a whopping 49,999,800 volts per hour. And since volts and watts are one-to-one when the amp is one, that means
all we have to do now is convert watts to kilowatts, which comes out to be a killer 49,999.8 kWh per hour.

<br>
<div align="center">

Energy Production From A Single Voltorb (kWh)
| Per hour | Per day     | Per Month  | Per Year    |
| -------- | ----------- | ---------- | ----------- |
| 49,999.8 | 1,199,995.2 | 35,999,856 | 431,998,272 |

</div>
<br>

Based on the table, one Voltorb would be able to generate enough power to last us 163 years and half of that energy would be for safety measures,
but we obviously can't just use one Voltorb all year round. Also, since electro ball only has a PP of 10, that means one Voltorb would
only last 2 minutes before it runs out of PP, which could be remedied by creating a poke healing station right above them, but we also don't want
to force them to work for 8 hours straight everyday. So with those conditions, we can set two Voltorbs to work at each station for 8 hours long, 
allowing them swap at any given period they like, and also have them alternate work days with another pair. 

<br>
<div align="center">

Energy Production For 8 Hour Work Days
| Per hour | Per 8h day     | Per Month  | Per Year    |
| -------- | -------------- | ---------- | ----------- |
| 49,999.8 | 399,998.4      | 11,999,952 | 143,999,424 |

</div>
<br>

We are now finally at the juicy part. How many Voltorbs do we need? Well based off the table above and our previous statement, only four
and we'll still have **PLENTY** extra energy...but that's no fun and we need to account for sick days, accidents, and holidays...so lets throw in
eight more and make it a <em>**PARTY**</em>

<img align="right" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="right" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="right" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="right" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="right" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="right" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />

<img align="left" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="left" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="left" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="left" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="left" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />
<img align="left" src="https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif" />













