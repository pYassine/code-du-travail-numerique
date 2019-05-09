---
name: Toast
menu: Component
---
import "@cdt/css";
import { Playground, Props } from "docz";
import Section from "../Section"
import Toast from ".";

# Toast

## Animated

<Playground>
  <Section>
    <Toast type="info" animate="from-top">
      {'Here is an info coming from the sky'}
    </Toast>
  </Section>
  <Section>
    <Toast type="info" animate="from-right">
      {'Here is an info coming from the sea'}
    </Toast>
  </Section>
  <Section>
    <Toast type="success" animate="from-left" shadow>
      {'Here is an success coming from the woods with a shadow'}
    </Toast>
  </Section>
  <Section>
    <Toast type="warning" animate="from-bottom">
      {'Here is an warning coming from the ground'}
    </Toast>
  </Section>
</Playground>

## Non animated

<Playground>
  <Section>
    <Toast type="info">Here is an info.</Toast>
  </Section>
  <Section>
    <Toast type="success">Here is a success.</Toast>
  </Section>
  <Section>
    <Toast type="warning" shadow>Here is a warning with a shadow.</Toast>
  </Section>
  <Section>
    <Toast type="info" onRemove={() => {alert('Are you trying to remove me ?!')}}>
      {'Here is a removable info'}
    </Toast>
  </Section>
  <Section>
    <Toast type="info" wide>
      {'Here is a wide info.'}
    </Toast>
  </Section>
  <Section>
    <Toast type="info" onRemove={() => {alert('I did nothing wrong !')}}>
      <div>
        {'This is a crazy long removable toast,'}
        <br />
        {'more than you would ever expect'}
        <br />
        {
          'They could be like anything you want inside, from link to lists and even more !'
        }
        <br />
        <ul>
          <li>Look</li>
          <li>at</li>
          <li>this</li>
          <li>list</li>
          <li>!!!</li>
        </ul>
        <b>ok</b>
      </div>
    </Toast>
  </Section>
</Playground>

<Props of={Toast} />