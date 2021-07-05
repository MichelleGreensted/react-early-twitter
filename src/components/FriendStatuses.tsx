import StatusItem from "./StatusItem";

function FriendStatuses(): JSX.Element {
  return (
    <section>
      <h2>friend's status</h2>
      <a href="#">add more friends</a>
      <ol>
        <StatusItem
          username={"jack"}
          content={"wondering when Mer is going to show up"}
          timeAgo={{ n: 5, unit: "minutes" }}
        />
        <StatusItem
          username={"Dom"}
          content={"who's johnny, he says"}
          emoji={"⭐"}
          timeAgo={{ n: 15, unit: "minutes" }}
        />
        <StatusItem
          username={"ev"}
          content={"so excited about new odeo ideas"}
          emoji={"⭐"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"Tony Stubblebine"}
          content={"thinking about polyphasic sleep"}
          emoji={"◻️"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"drx"}
          content={"chatting in gmail w/Jack"}
          emoji={"⭐"}
          timeAgo={{ n: 31, unit: "minutes" }}
        />
        <li>
          ⭐ <a href="#">drx</a>: chatting in gmail w/Jack
          <small>31 minutes ago</small>
        </li>
        <li>
          ⭐ <a href="#">biz</a>: having some coffee
          <small>36 minutes ago</small>
        </li>
        <li>
          ⭐ <a href="#">Florian</a>: Preparing a pizza
          <small>about 3 hours ago</small>
        </li>
        <li>
          ⭐ <a href="#">Courtney</a>: multi-tasking audio debug audio coding
          <small>about 8 hours ago</small>
        </li>
        <li>
          ◻️ <a href="#">Jack</a>: fantasizing about jack drawing naked people
          mmmmmmmmmmmmm..... naked people. <small>about 21 hours ago</small>
        </li>
        <li>
          ⭐ <a href="#">noah</a>: Oh crap, I think I might be getting that f'in
          cold' <small>about 21 hours ago</small>
        </li>
        <li>
          ⭐ <a href="#">asruge</a>: put some rss on my mp3
          <small>about 22 hours ago</small>
        </li>
        <li>
          ⭐ <a href="#">crystal</a>: in the musicals <small>1 day ago</small>
        </li>
        <li>
          ◻️ <a href="#">Tim Roberts</a>: setting up my mac mini
          <small>1 day ago</small>
        </li>
        <li>
          ◻️ <a href="#">4153738157</a>: just setting up my twttr
          <small>1 day ago</small>
        </li>
      </ol>
    </section>
  );
}

export default FriendStatuses;
