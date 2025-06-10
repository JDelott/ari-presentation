import React from 'react';

// This should trigger react/no-unescaped-entities errors
function TestComponent() {
  return (
    <div>
      {/* These should show ESLint errors for unescaped entities */}
      <h1>Welcome to John's Portfolio</h1>
      <p>I'm a software developer who's passionate about React.</p>
      <p>Here's what I can do:</p>

      {/* These should show errors too */}
      <div>Don't worry, we'll get this working!</div>
      <span>It's really that simple.</span>

      {/* Multiple quotes in one line */}
      <p>We're here to help you understand what's happening.</p>

       {/* Multiple quotes in one line */}
      <p>We're here to help you understand what's happening.</p>

      {/* Other characters that should be escaped */}
      <p>Use < and > symbols carefully</p>
   

      {/* Correct versions (these should NOT show errors) */}
      <h2>Welcome to John&apos;s Portfolio</h2>
      <p>I&apos;m a software developer who&apos;s passionate about React.</p>
      <p>Here&apos;s what I can do:</p>
      <div>Don&apos;t worry, we&apos;ll get this working!</div>
      <span>It&apos;s really that simple.</span>
      <p>We&apos;re here to help you understand what&apos;s happening.</p>
      <p>Use &lt; and &gt; symbols carefully</p>
      <p>Q&amp;A section coming soon</p>

      {/* Alternative correct versions */}
      <h3>Welcome to John&#39;s Portfolio</h3>
      <p>I&#39;m a developer</p>

      {/* Using template literals (also correct) */}
      <p>{`I'm a developer and here's my work`}</p>
    </div>
  );
}

// Test with props that have unescaped entities
interface TestProps {
  title: string;
}

function TestWithProps({ title }: TestProps) {
  return (
    <div>
      {/* This should trigger error */}
      <h1>Here's the title: {title}</h1>

      {/* This should be fine */}
      <h1>Here&apos;s the title: {title}</h1>
    </div>
  );
}

// Test with comments that have unescaped entities
function TestWithComments() {
  return (
    <div>
      {/* This comment has unescaped entities: don't do this */}
      <p>Some content</p>

      {/* This comment is properly escaped: don&apos;t do this */}
      <p>More content</p>
    </div>
  );
}

export default TestComponent;