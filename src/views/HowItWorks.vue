<template>
<div class="container">
  <h1 class="text-center">Degen Domain Smart Contracts</h1>

  <div class="row mt-3">
    <div class="col-md-8 offset-md-2">
      <p class="text-center">
        An Overview of <strong>TLD Factories</strong>, <strong>TLD Contracts</strong> and <strong>Domains</strong>.
      </p>

      <p class="text-center">
        <img class="img-fluid" src="../assets/architecture.png" />
      </p>

      <h3>TLD Factories</h3>

      <p>
        The Degen Domain protocol starts with TLD Factory contracts. Each TLD Factory contract defines the logic for creating
        new TLD contracts. This logic includes the price and any royalty for each domain.
      </p>
        
      <p>
        To prevent two factories from creating the same TLD, the <code>DegenForbiddenTlds</code> contract holds a list of already 
        used or restricted TLD names (<code>.eth</code> is an example of a forbidden TLD name, because it's used in ENS).
      </p>

      <h3>DegenTLD contracts</h3>

      <p>
        Degen TLD contracts are minted from the TLD Factory contract for price defined by the TLD Factory logic. The 
        price logic should be high enough to discourge domain spamming and squatting. But not so high the general public will reject it.
      </p>

      <p>New TLD mints can be temporarily restricted to the factory owner only. The TLD owner can set domain prices and can stop domain sales 
        anytime they wish.
      </p>
  
      <p>
        The factory owner can set a royalty for each domain purchase, but the royalty can never exceed 50% of the 
        domain price (in reallity it around 1% to 10% and some cases 0%).
      </p>

      <h3>Domains</h3>

      <p>
        <ul>
          <li>Example of a TLD: <code>.ben</code></li>
          <li>Example of a domain: <code>ilove.ben</code></li>
        </ul>
      </p>

      <p>A domain can only be held by one address, but one address can hold many domains.</p>

      <p>
        A domain can hold many pieces of data:
        <ul>
          <li>The holder's address (by default).</li>
          <li>Profile picture (an NFT that the user owns).</li>
          <li>
            URL (like user's homepage or similar; this comes handy together with the Degen Domains browser 
            plugin).
          </li>
          <li>Custom data such as a Twitter handle, description, etc.</li>
        </ul>
      </p>

      <p>
        Each domain is an ERC-721 NFT and can be sold on NFT marketplaces.
      </p>

    </div>
  </div>
</div>
</template>

<script lang="ts">
  export default {
    name: "HowItWorks"
  }
</script>

<style scoped>
p {
  text-align: justify;
  font-size: 1.1em;
}

h3 {
  margin-top: 35px;
}
</style>