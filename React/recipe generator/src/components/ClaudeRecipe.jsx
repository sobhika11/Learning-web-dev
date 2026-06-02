import React from "react"

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>

      <article
        className="suggested-recipe-container"
        aria-live="polite"
      >
        {recipe ? (
          <pre style={{ whiteSpace: "pre-wrap" }}>{recipe}</pre>
        ) : (
          <p>No recipe generated yet.</p>
        )}
      </article>
    </section>
  )
}

export default ClaudeRecipe;