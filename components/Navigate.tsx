import Image from "next/image";

export default function Navigate() {
  return (
      <div className={'flex flex-col space-y-6'}>
          <div className={'grid grid-cols-2'}>
              <Image src={'/adventure.jpg'} alt={'adventure'} width={750} height={750}/>
              <div>
                  <h1 className={'text-4xl text-primary font-medium text-center mb-6'}>Adventure</h1>
                  <p className={'text-xl'}>Nigeria offers a captivating blend of adventure experiences, showcasing
                      diverse landscapes, vibrant cultures, and rich history. From bustling cities to untamed
                      wilderness, there`s an array of activities for the adventurous traveler.</p>
                  <p className={'text-xl mt-2.5'}>Venture beyond the urban sprawl into Nigeria`s wilder side. Explore untamed wilderness areas, where national parks and reserves harbor diverse ecosystems and wildlife. Embark on safaris to spot elephants, antelopes, and exotic bird species in their natural habitats.</p>
                  <p className={'text-xl mt-2.5'}>With proper planning and an adventurous spirit, Nigeria promises an
                      unforgettable and enriching journey off the beaten path.</p>
              </div>
          </div>
          <div className={'grid grid-cols-2'}>
              <div>
                  <h1 className={'text-4xl text-primary font-medium text-center mb-6'}>Entertainment</h1>
                  <p className={'text-xl'}>Nigeria boasts a vibrant and dynamic entertainment scene that reflects the
                      country`s rich cultural heritage and creative diversity. From music and film to art and fashion,
                      Nigeria`s entertainment industry captivates both local audiences and international
                      enthusiasts.</p>
                  <p className={'text-xl mt-2.5'}> Nigerian musicians, such as Fela Kuti, King Sunny Ade, and contemporary stars like Wizkid, Burna Boy, and Tiwa Savage, have achieved global acclaim, blending traditional rhythms with modern sounds
                  </p>
                  <p className={'text-xl mt-2.5'}>Nollywood, Nigeria`s prolific film industry, is the second-largest in the world by volume, producing a vast array of movies each year. Nigerian films, characterized by compelling storytelling and dramatic narratives, span genres from romantic comedies to action-packed thrillers and thought-provoking dramas.
                  <br/>
                  Beyond music and film, Nigeria`s entertainment scene embraces art and fashion. Nigerian artists, such as Ben Enwonwu and Njideka Akunyili Crosby, have garnered critical acclaim for their contemporary works, blending traditional themes with modern techniques.
                  </p>
              </div>
              <Image src={'/entertainment.jpg'} alt={'adventure'} width={750} height={750}/>
          </div>
          <div className={'grid grid-cols-2'}>
              <Image src={'/culture.jpg'} alt={'adventure'} width={750} height={750}/>
              <div>
                  <h1 className={'text-4xl text-primary font-medium text-center mb-6'}>Culture</h1>
                  <p className={'text-xl'}>Nigeria`s culture is a vibrant tapestry woven from diverse ethnic groups, traditions, languages, religions, and artistic expressions. This rich cultural heritage is deeply rooted in history and continues to evolve, reflecting the country`s dynamic and multifaceted identity.</p>
                  <p className={'text-xl mt-2.5'}>Nigeria`s cultural festivities are vibrant and colorful, with numerous festivals celebrated throughout the year. Events like the Durbar festival in the north, the Osun-Osogbo festival in Osun State, and the Eyo festival in Lagos showcase traditional music, dance, costumes, and rituals, offering insights into local beliefs and customs.</p>
                  <p className={'text-xl mt-2.5'}>From traditional drumming and chanting to contemporary Afrobeat and Afrobeats, Nigerian music resonates both locally and globally, serving as a powerful expression of identity and creativity.</p>
              </div>
          </div>
          <div className={'grid grid-cols-2'}>
              <div>
                  <h1 className={'text-4xl text-primary font-medium text-center mb-6'}>Food</h1>
                  <p className={'text-xl'}>Nigerian cuisine is a vibrant tapestry of flavors, colors, and textures that reflect the country`s diverse cultural heritage and culinary traditions. From the bustling markets of Lagos to the villages of the Niger Delta, Nigerian food embodies a rich fusion of ingredients and techniques passed down through generations.</p>
                  <p className={'text-xl mt-2.5'}>
                      One of the most beloved dishes in Nigeria is Jollof Rice—a colorful medley of rice, tomatoes, onions, and spices cooked to perfection. Each household and region adds its unique twist, creating variations that range from mildly spiced to intensely flavorful.</p>
                  <p className={'text-xl mt-2.5'}>
                      Desserts and snacks like Puff Puff—a sweet, fluffy fried dough—and Chin Chin—a crispy, lightly sweetened snack—are enjoyed by young and old alike, often served during festive occasions or as a delightful afternoon treat.
                  </p>
              </div>
              <Image src={'/food.jpg'} alt={'adventure'} width={750} height={750}/>
          </div>
      </div>
  );
}
