webpackJsonp([2450880067746],{279:function(e,o){e.exports={data:{markdownRemark:{html:'<p>If you\'ve been around React for any length of time, you\'re almost certainly aware of proptypes (or the equivalent in whatever type system you\'re using). I\'ve been aware of these since one of my first tutorials.</p>\n<p>I\'m not sure why it took me so long to find defaultProps and realize how useful they are, but I\'m here to make sure nobody else who reads this misses this little gem.</p>\n<p><img src="https://media.giphy.com/media/1NiMpeyTrYA00/giphy.gif" alt="holy weird riddles, batman!"></p>\n<h2>The What</h2>\n<p><strong>defaultProps</strong> is a property on a react class. Just like proptypes. It lets you assign (wait for it...) default values to your components\' props like so:</p>\n<pre><code>class ContactCard extends Component {\n  ...\n  render () { ... }\n}\n\nContactCard.defaultProps = {\n  firstName: "",\n  lastName: "",\n  age: 0,\n};\n</code></pre>\n<p><img src="https://media.giphy.com/media/TlK63EGn8YyRbiI6mBy/giphy.gif" alt="unamused"></p>\n<h2>The Why</h2>\n<p><strong>No more existence checks</strong></p>\n<pre><code>if ( this.props.person\n  &#x26;&#x26; this.props.person.phones\n  &#x26;&#x26; this.props.person.phones.mobile) {\n  this.setState({ phone: this.props.person.phones.mobile });\n}\n</code></pre>\n<p>If you\'ve ever been hurt by code like this or <code>Uncaught ReferenceErrors</code> then fear not! Default props can help.</p>\n<pre><code>ContactCard.defaultProps = {\n    person: {\n        phones: {\n            mobile: "",\n        },\n    },\n};\n</code></pre>\n<p>That may look a little verbose, but it allows your conditional check to look like</p>\n<pre><code>if(this.props.person.phones.mobile !== "") {\n  this.setState({ phone: this.props.person.phones.mobile });\n}\n</code></pre>\n<p>And the best part: if you forget the <code>if</code> check, then your code won\'t fail. It will just set your state to an empty string (which is probably a little better).</p>\n<p><img src="https://media.giphy.com/media/3o6ZtqUX8nlGDD1e9i/giphy.gif" alt="sure"></p>\n<p>There is one benefit to the verbosity of default props though...</p>\n<h4>Documentation 👏👏👏👏</h4>\n<p><img src="https://media.giphy.com/media/l0HlSi3AIOM3fAhX2/giphy.gif" alt="here we go"></p>\n<p>If you\'ve ever tried to figure out what shape of data an undocumented component is looking for, then suffer no longer!</p>\n<p>If you were to look at the source for this ContactCard component, it would be obvious very quickly what the component was looking for: a <code>person</code> object with a <code>phones</code> object with a <code>mobile</code> key that requires a <code>string</code>. Heck, you could even copy and paste the defaultProps to pass into the component.</p>\n<h2>The Ultimatum</h2>\n<p>So what\'s your choice? Will you string together conditionals until the keys on your keyboard no longer show letters? Will you meticulously document props until you have been awarded the <code>czar</code> title?</p>\n<p>Or will you use defaultProps?</p>\n<p><img src="https://media.giphy.com/media/l0Ex2ZerGEPohkIla/source.gif" alt="maybe... okay"></p>',frontmatter:{title:"Default Props in React"}}},pathContext:{slug:"/posts/default-props-in-react/"}}}});
//# sourceMappingURL=path---posts-default-props-in-react-f2c8acad1b07415c836d.js.map