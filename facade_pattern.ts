// Subsystem Class
abstract class Post  {
	abstract post() : void
}



class InstagramPost extends Post {

    post() : void {
        console.log(("Posting to Instagram")) 
    }
}

class TikTokPost extends Post {

    post() : void {
        console.log(("Posting to TikTok")) 
    }
}

class TwitterPost extends Post {

    post() : void {
        console.log(("Posting to Twitter")) 
    }
}

// Facade
class FacadePublisher  {
	private instagram = new InstagramPost()
	private tikTok = new TikTokPost()
	private twitter = new TwitterPost()

    
    publish() : void {
      this.instagram.post()
      this.tikTok.post()
      this.twitter.post()
    }
}

// Client
function publisherClient() {
  let facadePublisher = new FacadePublisher()
  facadePublisher.publish()
}


publisherClient()