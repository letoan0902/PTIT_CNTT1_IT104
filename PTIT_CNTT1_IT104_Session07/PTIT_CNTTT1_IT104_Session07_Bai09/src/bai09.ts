class PostComment {
    public id: string;
    public userId: string;
    public content: string;
    public replies: PostComment[] = [];
  
    constructor(id: string, userId: string, content: string) {
      this.id = id;
      this.userId = userId;
      this.content = content;
    }
  
    addReply(reply: PostComment): void {
      this.replies.push(reply);
    }
  }
  
  class Post {
    public id: string;
    public likes: string[] = [];
    public comments: PostComment[] = [];
    public userId: string;
    public content: string;
  
    constructor(id: string, userId: string, content: string) {
      this.id = id;
      this.userId = userId;
      this.content = content;
    }
  
    addLike(userId: string): void {
      if (this.likes.indexOf(userId) === -1) {
        this.likes.push(userId);
      }
    }
  
    addComment(comment: PostComment): void {
      this.comments.push(comment);
    }
  }
  
  class User {
    public id: string;
    public posts: Post[] = [];
    public followers: User[] = [];
  
    constructor(id: string) {
      this.id = id;
    }
  
    createPost(content: string): Post {
      const post = new Post(Id.next("post"), this.id, content);
      this.posts.push(post);
      return post;
    }
  
    comment(postId: string, commentContent: string, allUsers: User[]): PostComment | undefined {
      const post = findPostById(postId, allUsers);
      if (!post) return undefined;
  
      const cmt = new PostComment(Id.next("cmt"), this.id, commentContent);
      post.addComment(cmt);
      return cmt;
    }
  
    follow(user: User): void {
      if (user.id === this.id) return;
      let alreadyFollowing = false;
      for (let i = 0; i < this.followers.length; i++) {
        if (this.followers[i].id === user.id) {
          alreadyFollowing = true;
          break;
        }
      }
      if (!alreadyFollowing) {
        this.followers.push(user);
      }
    }
  
    likePost(postId: string, allUsers: User[]): void {
      const post = findPostById(postId, allUsers);
      if (!post) return;
      post.addLike(this.id);
    }
  
    viewFeed(): Post[] {
      const feed: Post[] = [];
      for (let i = 0; i < this.followers.length; i++) {
        const user = this.followers[i];
        for (let j = 0; j < user.posts.length; j++) {
          feed.push(user.posts[j]);
        }
      }
      return feed.sort((a: Post, b: Post) => numId(b.id) - numId(a.id));
    }
  }
  
  const Id = (() => {
    const counters: { [key: string]: number } = {};
    return {
      next: (prefix: string) => {
        counters[prefix] = (counters[prefix] || 0) + 1;
        const num = String(counters[prefix]);
        const padded = "0000".substring(0, 4 - num.length) + num;
        return `${prefix}_${padded}`;
      }
    };
  })();
  
  function numId(id: string): number {
    const n = id.split("_").pop();
    return Number(n || 0);
  }
  
  function findPostById(postId: string, users: User[]): Post | undefined {
    for (const u of users) {
      const p = u.posts.find(p => p.id === postId);
      if (p) return p;
    }
    return undefined;
  }
  
  const toan = new User("u_toan");
  const thao   = new User("u_thao");
  const linh = new User("u_linh");
  
  toan.follow(thao);
  toan.follow(linh);
  
  const p1 = thao.createPost("Hello từ Thảo!");
  const p2 = linh.createPost("Hôm nay trời đẹp quá 🌤️");
  const p3 = thao.createPost("Bài số 2 của Thảo");
  
  console.log("=== Toàn's feed ===");
  for (const p of toan.viewFeed()) {
    console.log(`- ${p.id} | by ${p.userId}: ${p.content}`);
  }
  
  toan.likePost(p1.id, [toan, thao, linh]);
  const cmt = toan.comment(p1.id, "Bài hay quá!", [toan, thao, linh]);
  
  if (cmt) {
    const reply = new PostComment(Id.next("cmt"), thao.id, "Cảm ơn Toàn!");
    cmt.addReply(reply);
  }
  
  console.log("\n=== Chi tiết post p1 ===");
  console.log(`Post: ${p1.id}, by ${p1.userId}, content="${p1.content}"`);
  console.log("Likes:", p1.likes);
  console.log("Comments:");
  for (const c of p1.comments) {
    console.log(`- ${c.id} by ${c.userId}: ${c.content}`);
    for (const r of c.replies) {
      console.log(`Reply ${r.id} by ${r.userId}: ${r.content}`);
    }
  }
  