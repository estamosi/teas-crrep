class TeasCreap {
    constructor(teaType) {
      this.teaType = teaType;
      this.isBrewed = false;
      this.enchantments = [];
    }
  
    brew() {
      setTimeout(() => {
        this.isBrewed = true;
        console.log(`Your enchanting ${this.teaType} tea is ready!`);
      }, 5000); // Simulate a 5-second brewing time
    }
  
    addEnchantment(enchantment) {
      if (this.isBrewed) {
        this.enchantments.push(enchantment);
        console.log(`Adding the enchantment of ${enchantment} to your brewed tea.`);
      } else {
        console.log('Please brew your tea before adding enchantments.');
      }
    }
  
    enjoy() {
      if (this.isBrewed) {
        const enchantedTea = this.enchantments.length > 0 ? `enchanted ${this.teaType}` : this.teaType;
        console.log(`Sipping on the magical flavor of ${enchantedTea} tea.`);
        if (this.enchantments.length > 0) {
          console.log(`Enchantments: ${this.enchantments.join(', ')}`);
        }
      } else {
        console.log('Your tea is not brewed yet. Please wait for the brewing process to complete.');
      }
    }
  }
  
  // Example usage:
  const magicalTea = new TeasCreap('Mystic Chai');
  magicalTea.brew();
  setTimeout(() => {
    magicalTea.addEnchantment('Wisdom');
    magicalTea.addEnchantment('Joy');
    magicalTea.enjoy();
  }, 6000); // Enjoy after 6 seconds
  