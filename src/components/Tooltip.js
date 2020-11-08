import React, { cloneElement, Fragment, useState, Component } from "react";
import { usePopper } from "react-popper";

const Popper = ({ content, children }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {cloneElement(children, {
        ref: setReferenceElement,
        onClick: () => setShow((prev) => !prev),
      })}

      {show &&
        cloneElement(
          content,
          {
            ref: setPopperElement,
            style: styles.popper,
            ...attributes.popper,
          },
          [<div className="popper-arrow" />]
        )}
    </Fragment>
  );
};

export default Popper;
