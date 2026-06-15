<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import catMemeUrl from "../../../assets/images/cat-meme.png";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      
      <div class="contact-info">
        <div class="contact-item">
          Email: <a href="mailto:hunga4858@gmail.com" class="contact-link">hunga4858@gmail.com</a>
        </div>
        <div class="contact-item">
          Facebook: <a href="https://www.facebook.com/boxi.booo/" target="_blank" rel="noopener noreferrer" class="contact-link">facebook.com/boxi.booo/</a>
        </div>
        <div class="contact-item">
          SĐT: <a href="tel:0899968811" class="contact-link">0899968811</a>
        </div>
      </div>

      <div class="contact-thanks">
        <span class="thanks-text">Cảm ơn anh chị đã xem phần trình bày của em</span>
        <img :src="catMemeUrl" class="thanks-meme" alt="Cảm ơn" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    margin-top: var(--space-xs);
  }

  &-item {
    font-size: 20px;
    font-weight: 500;
    color: var(--color-text-300);
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    @include mixins.mq("md") {
      font-size: 24px;
    }

    .contact-link {
      color: var(--color-text-400);
      text-decoration: none;
      font-weight: 800;
      letter-spacing: 0.02em;
      transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
      display: inline-block;

      &:hover {
        color: var(--color-accent-400);
        transform: translateY(-1px);
      }
    }
  }

  &-thanks {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-top: var(--space-md);
    width: fit-content;

    .thanks-text {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--color-text-400);
      line-height: 1.4;
      max-width: 320px;
    }

    .thanks-meme {
      height: 180px;
      width: auto;
      object-fit: contain;
    }

    @include mixins.mq("md") {
      gap: var(--space-md);
      margin-top: var(--space-lg);
      
      .thanks-text {
        font-size: 32px;
        max-width: 450px;
      }

      .thanks-meme {
        height: 280px;
      }
    }
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }
}
</style>
