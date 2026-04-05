import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export function WelcomeScreen({ navigation }: any) {
  const player = useVideoPlayer(require("../../../../assets/grapevine.mp4"), player => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/logo.svg")}
          style={styles.logo}
          contentFit="contain"
        />
      </View>

      <View style={styles.illustrationContainer}>
        <View style={styles.videoMask}>
          <VideoView
            player={player}
            style={styles.video}
            contentFit="cover"
            nativeControls={false}
          />
        </View>
        <Image source={require("../../../../assets/logo2.png")} style={[styles.icon, styles.iconSwiggy]} contentFit="contain" />
        <Image source={require("../../../../assets/logo1.png")} style={[styles.icon, styles.iconMicrosoft]} contentFit="contain" />
        <Image source={require("../../../../assets/logo5.png")} style={[styles.icon, styles.iconGoogle]} contentFit="contain" />
        <Image source={require("../../../../assets/logo3.png")} style={[styles.icon, styles.iconAmazon]} contentFit="contain" />
        <Image source={require("../../../../assets/logo4.png")} style={[styles.icon, styles.iconZomato]} contentFit="contain" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Practice Top Interview{"\n"}Questions <Text style={styles.headingHighlight}>with AI</Text>
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <LinearGradient
            colors={["#FF6D00", "#FF3900"]}
            style={styles.buttonGradient}
          >
            <Ionicons name="checkmark-circle" size={24} color={colors.buttonPrimaryText} />
            <Text style={styles.buttonText}>Let’s go</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.policyText}>
          By continuing, you acknowledge agreeing to our{"\n"}
          <Text style={styles.policyLink}>terms of service</Text> and{" "}
          <Text style={styles.policyLink}>privacy policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: spacing.xl,
  },
  header: {
    paddingTop: spacing.xl,
  },
  logo: {
    width: 150,
    height: 48,
  },
  illustrationContainer: {
    marginTop: spacing.mega,
    width: 320,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: spacing.xxxs
  },
  videoMask: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundSecondary,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    width: 75,
    height: 75,
    zIndex: 10,
    elevation: 10,
  },
  iconSwiggy: {
    top: 50,
    left: 30,
    height: 60,
    width: 60
  },
  iconMicrosoft: {
    top: 20,
    right: 55,
    height: 60,
    width: 60
  },
  iconGoogle: {
    top: 135,
    right: 0,
    height: 60,
    width: 60
  },
  iconAmazon: {
    bottom: 80,
    left: 15,
    height: 60,
    width: 60
  },
  iconZomato: {
    bottom: 25,
    right: 55,
    height: 60,
    width: 60
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: spacing.l,
    marginBottom: "auto",
  },
  heading: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: 23,
    lineHeight: 30, // Better than just 23 for multiline clipping in RN Android
    letterSpacing: -0.23,
    textAlign: "center",
    color: colors.textPrimary,
  },
  headingHighlight: {
    color: colors.primary,
  },
  footerContainer: {
    paddingHorizontal: spacing.l,
    width: "100%",
    alignItems: "center",
    marginTop: spacing.xxl,
  },
  buttonWrapper: {
    width: "100%",
    marginBottom: spacing.l,
    borderRadius: spacing.buttonRadius,
    elevation: 8,
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.m,
    borderRadius: spacing.cardRadius,
    borderBottomWidth: 8,
    borderBottomColor: colors.primaryExtraDark,
    gap: 8,
  },
  buttonText: {
    color: colors.buttonPrimaryText,
    fontFamily: typography.fonts.inter.semiBold,
    fontSize: typography.sizes.l,
  },
  policyText: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    color: colors.textSecondary,
    letterSpacing: -0.13,
  },
  policyLink: {
    fontFamily: "Inter_400Regular",
    textDecorationLine: "underline",
    color: colors.textSecondary,
  },
});
